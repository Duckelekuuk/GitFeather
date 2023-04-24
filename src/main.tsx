import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
