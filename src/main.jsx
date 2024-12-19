import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import "./scss/main.scss";
import { SearchContextProvider } from './context/SearchContext.jsx';
import { SidebarContextProvider } from './context/SidebarContext.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
