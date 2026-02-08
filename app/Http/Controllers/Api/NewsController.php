<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    /**
     * Display a listing of the news with filters and pagination.
     */
    public function index(Request $request): JsonResponse
    {
        try {
            $validator = Validator::make($request->all(), [
                'category' => 'nullable|string',
                'featured' => 'nullable|boolean',
                'search' => 'nullable|string|min:2',
                'per_page' => 'nullable|integer|min:1|max:50',
                'page' => 'nullable|integer|min:1',
                'sort_by' => 'nullable|in:published_at,views,title',
                'sort_order' => 'nullable|in:asc,desc',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Erro de validação',
                    'errors' => $validator->errors()
                ], 422);
            }

            $query = News::query();
            
            // Filtrar por categoria
            if ($request->has('category') && $request->category !== 'all') {
                $query->where('category', $request->category);
            }
            
            // Filtrar por destaque
            if ($request->has('featured') && $request->featured == 'true') {
                $query->where('is_featured', true);
            }
            
            // Busca por termo
            if ($request->has('search') && !empty($request->search)) {
                $query->where(function ($q) use ($request) {
                    $q->where('title', 'LIKE', '%' . $request->search . '%')
                      ->orWhere('summary', 'LIKE', '%' . $request->search . '%')
                      ->orWhere('content', 'LIKE', '%' . $request->search . '%')
                      ->orWhere('author', 'LIKE', '%' . $request->search . '%');
                });
            }
            
            // Ordenação
            $sortBy = $request->get('sort_by', 'published_at');
            $sortOrder = $request->get('sort_order', 'desc');
            $query->orderBy($sortBy, $sortOrder);
            
            // Paginação
            $perPage = $request->get('per_page', 9);
            $news = $query->paginate($perPage);
            
            return response()->json([
                'success' => true,
                'message' => 'Notícias carregadas com sucesso',
                'data' => $news->items(),
                'meta' => [
                    'current_page' => $news->currentPage(),
                    'last_page' => $news->lastPage(),
                    'per_page' => $news->perPage(),
                    'total' => $news->total(),
                    'has_more_pages' => $news->hasMorePages(),
                ]
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao carregar notícias',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified news.
     */
    public function show(string $slug): JsonResponse
    {
        try {
            $news = News::where('slug', $slug)->first();
            
            if (!$news) {
                return response()->json([
                    'success' => false,
                    'message' => 'Notícia não encontrada'
                ], 404);
            }
            
            // Incrementar visualizações
            $news->increment('views');
            
            // Notícias relacionadas (mesma categoria, excluindo a atual)
            $relatedNews = News::where('category', $news->category)
                ->where('id', '!=', $news->id)
                ->orderBy('published_at', 'desc')
                ->take(3)
                ->get();
            
            // Notícias populares
            $popularNews = News::where('id', '!=', $news->id)
                ->orderBy('views', 'desc')
                ->take(5)
                ->get();
            
            return response()->json([
                'success' => true,
                'message' => 'Notícia carregada com sucesso',
                'data' => [
                    'news' => $news,
                    'related_news' => $relatedNews,
                    'popular_news' => $popularNews,
                ]
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao carregar notícia',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get featured news.
     */
    public function featured(): JsonResponse
    {
        try {
            $featuredNews = News::where('is_featured', true)
                ->orderBy('published_at', 'desc')
                ->take(6)
                ->get();
            
            return response()->json([
                'success' => true,
                'message' => 'Notícias em destaque carregadas',
                'data' => $featuredNews
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao carregar notícias em destaque',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all categories.
     */
    public function categories(): JsonResponse
    {
        try {
            $categories = News::select('category')
                ->distinct()
                ->orderBy('category')
                ->pluck('category');
            
            return response()->json([
                'success' => true,
                'message' => 'Categorias carregadas',
                'data' => $categories
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao carregar categorias',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get recent news.
     */
    public function recent(): JsonResponse
    {
        try {
            $recentNews = News::orderBy('published_at', 'desc')
                ->take(6)
                ->get();
            
            return response()->json([
                'success' => true,
                'message' => 'Notícias recentes carregadas',
                'data' => $recentNews
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao carregar notícias recentes',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get popular news.
     */
    public function popular(): JsonResponse
    {
        try {
            $popularNews = News::orderBy('views', 'desc')
                ->take(5)
                ->get();
            
            return response()->json([
                'success' => true,
                'message' => 'Notícias populares carregadas',
                'data' => $popularNews
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao carregar notícias populares',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get news by category.
     */
    public function byCategory(string $category): JsonResponse
    {
        try {
            $news = News::where('category', $category)
                ->orderBy('published_at', 'desc')
                ->paginate(9);
            
            return response()->json([
                'success' => true,
                'message' => 'Notícias por categoria carregadas',
                'data' => $news->items(),
                'meta' => [
                    'current_page' => $news->currentPage(),
                    'total' => $news->total(),
                    'category' => $category
                ]
            ]);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao carregar notícias por categoria',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}