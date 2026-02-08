import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NewsIndex from './Pages/News/Index';
import NewsShow from './Pages/News/Show';
import Layout from './Layouts/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <NewsIndex news={[]} categories={[]} />,
            },
            {
                path: '/news/:slug',
                element: <NewsShow />,
            },
        ],
    },
]);