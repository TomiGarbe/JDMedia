import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { WhatsAppLeadProvider } from './context/WhatsAppLeadContext'
import { applyTheme, getInitialTheme } from './utils/theme'
import './index.css'

applyTheme(getInitialTheme())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <WhatsAppLeadProvider>
          <App />
        </WhatsAppLeadProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
