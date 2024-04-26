import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PagesRoutes from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PagesRoutes />
  </React.StrictMode>
);