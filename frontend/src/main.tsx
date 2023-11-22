import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme.ts';
import { AuthProvider } from './contexts/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>,
)
