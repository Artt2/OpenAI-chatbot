import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme.ts';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { ChatProvider } from './contexts/ChatContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster position="top-center"/>
          <ChatProvider>
            <App />
          </ChatProvider>
        </ThemeProvider>
      </BrowserRouter>
      </AuthProvider>
  </React.StrictMode>,
);
