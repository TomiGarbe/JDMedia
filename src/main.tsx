import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { WhatsAppLeadProvider } from './context/WhatsAppLeadContext'
import './index.css'

document.documentElement.classList.add('dark')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WhatsAppLeadProvider>
        <App />
      </WhatsAppLeadProvider>
    </BrowserRouter>
  </React.StrictMode>
)
