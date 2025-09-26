import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import HeroSection from './pages/home/home'
import About from './pages/about/about'
import Footer from './components/footer/footer'
import Gallery from './pages/gallery/gallery'

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Footer />
    </>
  )
}
export default App