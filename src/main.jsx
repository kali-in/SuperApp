import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './Home'
import CliToApi from './CliToApi'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wiki" element={<App />} />
        <Route path="/cli-to-api" element={<CliToApi />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
