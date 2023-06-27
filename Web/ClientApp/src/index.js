import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './custom.css';


const root = createRoot(document.getElementById('root'));

root.render(
    <App/>
)