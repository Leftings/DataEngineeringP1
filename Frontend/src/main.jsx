import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Selection from './Selection/Selection.jsx';
import CustomDashboard from './CustomDashboard/CustomDashboard.jsx';
import PowerBiDashboard from './PowerBiDashboard/PowerBiDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Selection></Selection>}></Route>
      <Route path="/Custom" element={<CustomDashboard></CustomDashboard>}></Route>
      <Route path="/PowerBi" element={<PowerBiDashboard></PowerBiDashboard>}></Route>
    </Routes>
  </BrowserRouter>
)
