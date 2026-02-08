import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
    const location = useLocation();
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    📰 News Portal
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
                            Início
                        </Nav.Link>
                        <Nav.Link href="#categorias">Categorias</Nav.Link>
                        <Nav.Link href="#sobre">Sobre</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                    
                    <div className="d-flex gap-2">
                        <Button variant="outline-light" size="sm">
                            Entrar
                        </Button>
                        <Button variant="primary" size="sm">
                            Cadastrar
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;