import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import "./scss/main.scss";
import { SearchContextProvider } from './context/SearchContext.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
