import api from './api';
import type { News, PaginatedResponse, NewsDetailResponse, CategoriesResponse } from '@/types';

export const newsService = {
    getAll: (params?: any) => 
        api.get<PaginatedResponse<News>>('/news', { params }),
    
    getBySlug: (slug: string) => 
        api.get<NewsDetailResponse>(`/news/${slug}`),
    
    getFeatured: () => 
        api.get<{ success: boolean; data: News[] }>('/news/featured'),
    
    getCategories: () => 
        api.get<CategoriesResponse>('/news/categories'),
    
    getByCategory: (category: string) => 
        api.get<PaginatedResponse<News>>('/news', { params: { category } }),
};