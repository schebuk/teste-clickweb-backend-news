export interface News {
    id: number;
    title: string;
    slug: string;
    summary: string;
    content: string;
    image_url: string | null;
    author: string;
    category: string;
    published_at: string;
    views: number;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
    formatted_date?: string;
    excerpt?: string;
}

export interface PaginatedResponse<T> {
    success: boolean;
    data: T[];
    meta: {
        current_page: number;
        last_page: number;
        total: number;
        per_page: number;
    };
}

export interface NewsDetailResponse {
    success: boolean;
    data: News;
    related: News[];
}

export interface CategoriesResponse {
    success: boolean;
    data: string[];
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}