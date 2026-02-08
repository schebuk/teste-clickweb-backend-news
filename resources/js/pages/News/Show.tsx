import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { useParams } from 'react-router-dom';
import { News } from '@/types';
import { newsService } from '@/services/newsService';
import Layout from '@/Layouts/Layout';
import { 
    Container, 
    Row, 
    Col, 
    Card, 
    Badge, 
    Button,
    Spinner 
} from 'react-bootstrap';
import { 
    CalendarIcon, 
    EyeIcon, 
    UserIcon,
    ArrowLeftIcon 
} from '@heroicons/react/24/outline';

const NewsShow: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [news, setNews] = useState<News | null>(null);
    const [relatedNews, setRelatedNews] = useState<News[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            loadNews();
        }
    }, [slug]);

    const loadNews = async () => {
        setLoading(true);
        try {
            const response = await newsService.getBySlug(slug!);
            setNews(response.data.data);
            setRelatedNews(response.data.related || []);
        } catch (error) {
            console.error('Error loading news:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Layout>
                <Container className="py-5 text-center">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3">Carregando notícia...</p>
                </Container>
            </Layout>
        );
    }

    if (!news) {
        return (
            <Layout>
                <Container className="py-5 text-center">
                    <h3>Notícia não encontrada</h3>
                    <Link href="/" className="btn btn-primary mt-3">
                        Voltar para Home
                    </Link>
                </Container>
            </Layout>
        );
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <Layout>
            <Head title={news.title} />
            
            <Container className="py-4">
                {/* Botão Voltar */}
                <Link href="/" className="d-inline-flex align-items-center text-decoration-none mb-4">
                    <ArrowLeftIcon className="h-4 w-4 me-2" />
                    Voltar para notícias
                </Link>

                <Row>
                    {/* Conteúdo Principal */}
                    <Col lg={8}>
                        {/* Cabeçalho */}
                        <div className="mb-4">
                            <div className="d-flex gap-2 mb-3">
                                <Badge bg="primary" className="fs-6">
                                    {news.category}
                                </Badge>
                                {news.is_featured && (
                                    <Badge bg="warning" text="dark" className="fs-6">
                                        Destaque
                                    </Badge>
                                )}
                            </div>
                            
                            <h1 className="fw-bold mb-3">{news.title}</h1>
                            
                            <div className="d-flex flex-wrap gap-3 text-muted mb-4">
                                <div className="d-flex align-items-center">
                                    <UserIcon className="h-4 w-4 me-2" />
                                    <span>{news.author}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <CalendarIcon className="h-4 w-4 me-2" />
                                    <span>{formatDate(news.published_at)}</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <EyeIcon className="h-4 w-4 me-2" />
                                    <span>{news.views} visualizações</span>
                                </div>
                            </div>
                        </div>

                        {/* Imagem */}
                        {news.image_url && (
                            <div className="mb-4">
                                <img 
                                    src={news.image_url} 
                                    alt={news.title}
                                    className="img-fluid rounded shadow"
                                    style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        )}

                        {/* Resumo */}
                        <Card className="mb-4 bg-light border-0">
                            <Card.Body>
                                <Card.Title>Resumo</Card.Title>
                                <Card.Text className="fs-5">
                                    {news.summary}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Conteúdo */}
                        <div className="mb-5">
                            <div 
                                dangerouslySetInnerHTML={{ __html: news.content }}
                                className="news-content"
                            />
                        </div>

                        {/* Compartilhar */}
                        <Card className="mb-5">
                            <Card.Body>
                                <Card.Title>Compartilhar</Card.Title>
                                <div className="d-flex gap-2">
                                    <Button variant="outline-primary">
                                        <i className="bi bi-facebook me-2"></i>
                                        Facebook
                                    </Button>
                                    <Button variant="outline-info">
                                        <i className="bi bi-twitter me-2"></i>
                                        Twitter
                                    </Button>
                                    <Button variant="outline-success">
                                        <i className="bi bi-whatsapp me-2"></i>
                                        WhatsApp
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                        {/* Notícias Relacionadas */}
                        {relatedNews.length > 0 && (
                            <Card className="mb-4">
                                <Card.Header className="bg-primary text-white">
                                    <Card.Title className="mb-0">
                                        Notícias Relacionadas
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    {relatedNews.map((item) => (
                                        <div key={item.id} className="mb-3 pb-3 border-bottom">
                                            <h6>
                                                <Link 
                                                    href={`/news/${item.slug}`}
                                                    className="text-decoration-none"
                                                >
                                                    {item.title}
                                                </Link>
                                            </h6>
                                            <small className="text-muted d-block">
                                                <CalendarIcon className="h-3 w-3 me-1 d-inline" />
                                                {formatDate(item.published_at)}
                                            </small>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                        )}

                        {/* Info Card */}
                        <Card className="mb-4">
                            <Card.Header className="bg-dark text-white">
                                <Card.Title className="mb-0">
                                    Informações
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p><strong>Categoria:</strong> {news.category}</p>
                                <p><strong>Autor:</strong> {news.author}</p>
                                <p><strong>Publicado em:</strong> {formatDate(news.published_at)}</p>
                                <p>
                                    <strong>Status:</strong>{' '}
                                    {news.is_featured ? (
                                        <Badge bg="warning" text="dark">Em Destaque</Badge>
                                    ) : (
                                        <Badge bg="secondary">Publicado</Badge>
                                    )}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default NewsShow;