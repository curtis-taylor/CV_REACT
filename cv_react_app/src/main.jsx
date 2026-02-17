import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CvApp from './CvApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvApp/>
  </StrictMode>,
)
