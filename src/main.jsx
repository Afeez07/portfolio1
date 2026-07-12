import React from 'react'
import ReactDOM from 'react-dom/client'
import gsap from 'gsap'
import App from './App.jsx'
import './index.css'

// Globally respect user's reduced-motion preference
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(1000); 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
