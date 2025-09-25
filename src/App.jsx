import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import HeroSection from './pages/home/home'
import About from './pages/about/about'
import Footer from './components/footer/footer'

const App=() =>{

  return (
    <>
      <Navbar/> 
       <HeroSection />
       <About />
       <Footer />
      
    </>
  )
}

export default App