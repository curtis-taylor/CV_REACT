import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CvApp from './CvApp.jsx'
import CvApp2 from './CvApp2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CvApp2/>
  </StrictMode>,
)
