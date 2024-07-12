import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PlayContextProvider } from './Context/PlayContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayContextProvider>
        <App />
      </PlayContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
