import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home';
import App from './App'

import { Routes, Route, BrowserRouter } from "react-router-dom";

import '/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/app" element={<App/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
