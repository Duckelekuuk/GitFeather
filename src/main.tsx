import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.scss';

import { createHashRouter, RouterProvider } from 'react-router-dom';
import ProjectOverview from '@/pages/ProjectOverview';

const router = createHashRouter([
    {
        path: '/',
        element: <ProjectOverview />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
