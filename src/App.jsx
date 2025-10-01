import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HeroSection from './pages/home/home'
import About from './pages/about/about'
import Gallery from './pages/gallery/gallery'
import BarBookingForm from './pages/event/booking'
import ComingEvent from './pages/event/comingEvent'
import PastEvent from './pages/event/pastevent'
import BarView from './pages/home/barView'
import ContactPage from './pages/contact/contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<BarView />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events/coming" element={<ComingEvent />} />
          <Route path="events/past" element={<PastEvent />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/booking" element={<BarBookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;