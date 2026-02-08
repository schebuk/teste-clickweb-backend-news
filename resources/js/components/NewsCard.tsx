import React from 'react';
import { Link } from '@inertiajs/react';
import { News } from '@/types';
import { Card } from 'react-bootstrap';
import { CalendarIcon, EyeIcon, UserIcon } from '@heroicons/react/24/outline';

interface NewsCardProps {
    news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };

    return (
        <Card className="h-100 shadow-sm border-0 hover-shadow transition-all">
            <Card.Img 
                variant="top" 
                src={news.image_url || 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                style={{ height: '200px', objectFit: 'cover' }}
                className="card-img-top"
            />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-primary">{news.category}</span>
                    {news.is_featured && (
                        <span className="badge bg-warning text-dark">
                            <i className="bi bi-star-fill me-1"></i>
                            Destaque
                        </span>
                    )}
                </div>
                
                <Card.Title className="fw-bold mb-3">
                    {news.title}
                </Card.Title>
                
                <Card.Text className="text-muted flex-grow-1">
                    {news.summary.substring(0, 120)}...
                </Card.Text>
                
                <div className="mt-auto">
                    <div className="d-flex justify-content-between text-muted small mb-3">
                        <div className="d-flex align-items-center">
                            <UserIcon className="h-3 w-3 me-1" />
                            <span>{news.author}</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <CalendarIcon className="h-3 w-3 me-1" />
                            <span>{formatDate(news.published_at)}</span>
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center text-muted small">
                            <EyeIcon className="h-3 w-3 me-1" />
                            <span>{news.views} visualizações</span>
                        </div>
                        
                        <Link 
                            href={`/news/${news.slug}`}
                            className="btn btn-primary btn-sm"
                        >
                            Ler mais
                        </Link>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;