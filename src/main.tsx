import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'  <-- BORRA ESTA LÍNEA (ya no existe)
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)