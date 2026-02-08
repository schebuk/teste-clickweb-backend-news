import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Badge, Spinner, Alert } from 'react-bootstrap';
import { Clock, Eye, Person } from 'react-bootstrap-icons';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Dados mockados - depois substitua pela API
        setTimeout(() => {
            setNews([
                { 
                    id: 1, 
                    title: 'React 18 Lançado com Novos Recursos', 
                    excerpt: 'A versão mais recente do React traz melhorias de performance e novos hooks.',
                    category: 'Tecnologia',
                    author: 'João Silva',
                    date: '2024-01-15',
                    views: 1250,
                    readTime: '5 min'
                },
                { 
                    id: 2, 
                    title: 'Laravel 10 Anuncia Novas Features', 
                    excerpt: 'O framework PHP mais popular do mercado continua evoluindo.',
                    category: 'Desenvolvimento',
                    author: 'Maria Santos',
                    date: '2024-01-14',
                    views: 890,
                    readTime: '3 min'
                },
                {
                    id: 3, 
                    title: 'TypeScript Domina o Mercado Frontend', 
                    excerpt: 'Estudo mostra aumento de 300% no uso de TypeScript nos últimos 2 anos.',
                    category: 'JavaScript',
                    author: 'Carlos Oliveira',
                    date: '2024-01-13',
                    views: 2100,
                    readTime: '7 min'
                },
            ]);
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3">Carregando notícias...</p>
            </div>
        );
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <>
            <div className="mb-4">
                <h1 className="fw-bold">📰 Últimas Notícias</h1>
                <p className="text-muted">Fique por dentro das novidades do mundo tech</p>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                {news.map((item) => (
                    <Col key={item.id}>
                        <Card className="h-100 shadow-sm border-0 hover-shadow">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <Badge bg="primary" className="fw-normal">
                                        {item.category}
                                    </Badge>
                                    <small className="text-muted">
                                        <Clock size={14} className="me-1" />
                                        {item.readTime}
                                    </small>
                                </div>
                                
                                <Card.Title className="fw-bold">
                                    <Link 
                                        to={`/news/${item.id}`} 
                                        className="text-dark text-decoration-none"
                                    >
                                        {item.title}
                                    </Link>
                                </Card.Title>
                                
                                <Card.Text className="text-muted">
                                    {item.excerpt}
                                </Card.Text>
                            </Card.Body>
                            
                            <Card.Footer className="bg-white border-top-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <Person size={16} className="text-muted me-1" />
                                        <small className="text-muted">{item.author}</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Eye size={16} className="text-muted me-1" />
                                        <small className="text-muted">{item.views.toLocaleString()}</small>
                                    </div>
                                </div>
                                
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <small className="text-muted">
                                        {new Date(item.date).toLocaleDateString('pt-BR')}
                                    </small>
                                    <Button 
                                        as={Link} 
                                        to={`/news/${item.id}`}
                                        variant="outline-primary" 
                                        size="sm"
                                    >
                                        Ler mais →
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            {news.length === 0 && (
                <Alert variant="info" className="text-center">
                    Nenhuma notícia encontrada.
                </Alert>
            )}
        </>
    );
};

export default NewsList;