import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
    Container, 
    Card, 
    Button, 
    Badge, 
    Spinner, 
    Alert,
    Row,
    Col 
} from 'react-bootstrap';
import { 
    ArrowLeft, 
    Calendar, 
    Person, // MUDEI: De "User" para "Person"
    Eye,
    Share, 
    Bookmark 
} from 'react-bootstrap-icons';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedNews, setRelatedNews] = useState([]);

    useEffect(() => {
        // Simulação de API
        setTimeout(() => {
            setNews({
                id: id,
                title: `React 18: Revolução no Desenvolvimento Frontend`,
                content: `
                    <p class="lead">A mais recente versão do framework JavaScript mais popular do mundo chegou com mudanças significativas que prometem revolucionar a forma como desenvolvemos aplicações web.</p>
                    
                    <h3>Novidades Principais</h3>
                    <p>O React 18 introduz o conceito de "concurrent rendering", permitindo que a aplicação mantenha a responsividade mesmo durante renderizações pesadas. Isso significa que interfaces de usuário complexas podem agora ser mais fluidas e responsivas.</p>
                    
                    <ul>
                        <li><strong>Automatic Batching:</strong> Melhorias no agrupamento de atualizações de estado</li>
                        <li><strong>Transitions API:</strong> Priorização de atualizações de UI</li>
                        <li><strong>Suspense SSR:</strong> Suporte a Suspense no server-side rendering</li>
                        <li><strong>Novos Hooks:</strong> useId, useTransition, useDeferredValue</li>
                    </ul>
                    
                    <h3>Impacto no Desenvolvimento</h3>
                    <p>Desenvolvedores podem esperar melhorias significativas na performance de aplicações, especialmente aquelas com interfaces complexas e interativas. A adoção gradual permite que times migrem para a nova versão sem riscos.</p>
                    
                    <blockquote class="blockquote">
                        <p>"Esta é a maior atualização do React desde sua criação"</p>
                        <footer class="blockquote-footer">Equipe do React Core</footer>
                    </blockquote>
                `,
                category: 'Tecnologia',
                author: 'João Silva',
                date: '2024-01-15',
                views: 5421,
                readTime: '8 min',
                tags: ['React', 'JavaScript', 'Frontend', 'Web Development']
            });

            setRelatedNews([
                { id: 1, title: 'Vite vs Webpack: Qual escolher em 2024?' },
                { id: 2, title: 'TypeScript: Por que toda empresa está adotando?' },
                { id: 3, title: 'Laravel 10: As novas features que você precisa conhecer' }
            ]);

            setLoading(false);
        }, 1000);
    }, [id]);

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3">Carregando notícia...</p>
            </Container>
        );
    }

    if (!news) {
        return (
            <Container className="py-5">
                <Alert variant="danger">
                    <Alert.Heading>Notícia não encontrada</Alert.Heading>
                    <p>A notícia que você está procurando não existe ou foi removida.</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-danger" onClick={() => navigate('/')}>
                            Voltar para lista
                        </Button>
                    </div>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="py-4">
            {/* Botão voltar */}
            <Button 
                variant="outline-secondary" 
                className="mb-4" 
                onClick={() => navigate('/')}
            >
                <ArrowLeft className="me-2" />
                Voltar para notícias
            </Button>

            {/* Cabeçalho da notícia */}
            <div className="mb-4">
                <Badge bg="primary" className="mb-3 px-3 py-2">
                    {news.category}
                </Badge>
                
                <h1 className="fw-bold mb-3">{news.title}</h1>
                
                <div className="d-flex flex-wrap gap-3 align-items-center text-muted mb-4">
                    <div className="d-flex align-items-center">
                        {/* MUDEI AQUI: De "User" para "Person" */}
                        <Person size={18} className="me-2" />
                        <span>{news.author}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <Calendar size={18} className="me-2" />
                        <span>{new Date(news.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <Eye size={18} className="me-2" />
                        <span>{news.views.toLocaleString()} visualizações</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span>⏱️ {news.readTime} de leitura</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                    {news.tags.map((tag, index) => (
                        <Badge key={index} bg="light" text="dark" className="px-3 py-1">
                            #{tag}
                        </Badge>
                    ))}
                </div>
            </div>

            <Row>
                <Col lg={8}>
                    {/* Conteúdo */}
                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Body>
                            <div 
                                className="news-content"
                                dangerouslySetInnerHTML={{ __html: news.content }}
                            />
                        </Card.Body>
                        
                        <Card.Footer className="bg-white border-top">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex gap-2">
                                    <Button variant="outline-primary" size="sm">
                                        <Share className="me-2" />
                                        Compartilhar
                                    </Button>
                                    <Button variant="outline-secondary" size="sm">
                                        <Bookmark className="me-2" />
                                        Salvar
                                    </Button>
                                </div>
                                
                                <small className="text-muted">
                                    Publicado em: {new Date(news.date).toLocaleDateString('pt-BR')}
                                </small>
                            </div>
                        </Card.Footer>
                    </Card>

                    {/* Comentários */}
                    <Card className="border-0 shadow-sm">
                        <Card.Header className="bg-white">
                            <h5 className="mb-0">💬 Comentários (3)</h5>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Sistema de comentários em desenvolvimento...</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    {/* Notícias relacionadas */}
                    <Card className="border-0 shadow-sm mb-4">
                        <Card.Header className="bg-primary text-white">
                            <h5 className="mb-0">📰 Notícias Relacionadas</h5>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                {relatedNews.map((item) => (
                                    <li key={item.id} className="mb-3 pb-3 border-bottom">
                                        <Link 
                                            to={`/news/${item.id}`} 
                                            className="text-decoration-none text-dark"
                                        >
                                            <h6 className="fw-bold mb-1">{item.title}</h6>
                                            <small className="text-muted">Ler mais →</small>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>

                    {/* Newsletter */}
                    <Card className="border-0 shadow-sm">
                        <Card.Body className="text-center">
                            <h5 className="mb-3">📧 Assine nossa newsletter</h5>
                            <p className="text-muted small mb-3">
                                Receba as melhores notícias de tech diretamente no seu email
                            </p>
                            <div className="input-group mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="seu@email.com"
                                />
                                <button className="btn btn-primary" type="button">
                                    Assinar
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsDetail;