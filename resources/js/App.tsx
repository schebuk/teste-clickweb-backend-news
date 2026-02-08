import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<NewsList />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;