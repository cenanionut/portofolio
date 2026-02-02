import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../framer/styles.css'
import './overrides.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
