import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import HeroSection from './pages/home/home'
import About from './pages/about/about'
import Footer from './components/footer/footer'
import Gallery from './pages/gallery/gallery'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HeroSection /> <About/></>} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App