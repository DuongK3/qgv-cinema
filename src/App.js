import React from 'react'

import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './pages/NotFound.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NotFound />} />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
    
  )
}

export default App