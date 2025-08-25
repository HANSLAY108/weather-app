// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- THIS LINE IS ESSENTIAL and was likely missing.
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);