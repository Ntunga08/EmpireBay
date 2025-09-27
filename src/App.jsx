import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import HeroSection from './pages/home/home'
import About from './pages/about/about'
import Footer from './components/footer/footer'
import Gallery from './pages/gallery/gallery'
import BarBookingForm from './pages/event/booking'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Nav and Footer */}
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection />
            <About />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
        <Route path="/gallery" element={
          <>
            <Gallery />
          </>
        } />
        
        {/* Booking route without Nav and Footer */}
        <Route path="/booking" element={<BarBookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;