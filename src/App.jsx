import React from 'react'
import { Routes,BrowserRouter,Route } from 'react-router-dom'
import AboutUsPage from './pages/AboutUs/AboutUsPage'
import Home from './pages/Home/Home'
import ContactUsPage from './pages/ContactUs/ContactUsPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUsPage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
