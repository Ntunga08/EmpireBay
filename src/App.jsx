import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import HeroSection from './pages/home/home'
import About from './pages/about/about'

const App=() =>{

  return (
    <>
      <Navbar/> 
       <HeroSection />
       <About />
      
    </>
  )
}

export default App