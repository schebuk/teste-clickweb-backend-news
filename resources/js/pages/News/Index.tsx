import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { News, PaginatedResponse } from '@/types';
import { newsService } from '@/services/newsService';
import Layout from '@/Layouts/Layout';
import NewsCard from '@/Components/NewsCard';
import { Spinner, Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CalendarIcon, EyeIcon, UserIcon } from '@heroicons/react/24/outline';

interface Props {
    news: News[];
    categories: string[];
}

const NewsIndex: React.FC<Props> = ({ news: initialNews, categories }) => {
    const [news, setNews] = useState<News[]>(initialNews);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [featuredNews, setFeaturedNews] = useState<News[]>([]);

    useEffect(() => {
        loadFeaturedNews();
    }, []);

    const loadFeaturedNews = async () => {
        try {
            const response = await newsService.getFeatured();
            setFeaturedNews(response.data.data);
        } catch (error) {
            console.error('Error loading featured news:', error);
        }
    };

    const loadNewsByCategory = async (category: string) => {
        setLoading(true);
        try {
            const response = await newsService.getByCategory(category);
            setNews(response.data.data);
            setSelectedCategory(category);
        } catch (error) {
            console.error('Error loading news:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR');
    };

    return (
        <Layout>
            <Head title="Notícias" />
            
            <Container className="py-4">
                {/* Destaques */}
                {featuredNews.length > 0 && (
                    <section className="mb-5">
                        <h2 className="mb-4 text-primary fw-bold">
                            <i className="bi bi-star-fill me-2"></i>
                            Notícias em Destaque
                        </h2>
                        <Row>
                            {featuredNews.map((item) => (
                                <Col md={4} key={item.id} className="mb-4">
                                    <Card className="h-100 shadow-sm border-0">
                                        <Card.Img 
                                            variant="top" 
                                            src={item.image_url || 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <Card.Body className="d-flex flex-column">
                                            <span className="badge bg-primary mb-2">
                                                {item.category}
                                            </span>
                                            <Card.Title className="fw-bold">
                                                {item.title}
                                            </Card.Title>
                                            <Card.Text className="text-muted flex-grow-1">
                                                {item.summary.substring(0, 100)}...
                                            </Card.Text>
                                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                                <small className="text-muted">
                                                    <UserIcon className="h-4 w-4 d-inline me-1" />
                                                    {item.author}
                                                </small>
                                                <Link 
                                                    href={`/news/${item.slug}`}
                                                    className="btn btn-primary btn-sm"
                                                >
                                                    Ler mais
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                )}

                {/* Filtros */}
                <section className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="fw-bold mb-0">Todas as Notícias</h3>
                        <div className="d-flex gap-2">
                            <Button
                                variant={selectedCategory === 'all' ? 'primary' : 'outline-primary'}
                                size="sm"
                                onClick={() => loadNewsByCategory('all')}
                            >
                                Todas
                            </Button>
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? 'primary' : 'outline-primary'}
                                    size="sm"
                                    onClick={() => loadNewsByCategory(category)}
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lista de Notícias */}
                {loading ? (
                    <div className="text-center py-5">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3">Carregando notícias...</p>
                    </div>
                ) : (
                    <Row>
                        {news.map((item) => (
                            <Col md={6} lg={4} key={item.id} className="mb-4">
                                <NewsCard news={item} />
                            </Col>
                        ))}
                    </Row>
                )}

                {news.length === 0 && !loading && (
                    <div className="text-center py-5">
                        <h4>Nenhuma notícia encontrada</h4>
                        <p className="text-muted">Tente selecionar outra categoria</p>
                    </div>
                )}
            </Container>
        </Layout>
    );
};

export default NewsIndex;