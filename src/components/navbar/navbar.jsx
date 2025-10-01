import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [eventsOpen, setEventsOpen] = React.useState(false);
  return (
    <nav className="backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/50 shadow-md fixed w-full top-0 left-0 z-50 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex bg-gradient-to-r from-cyan-600 to-cyan-700 justify-between items-center rounded-full">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Empire Bay</h1>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium items-center">
          <li><Link to="/" className="hover:text-cyan-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-200">About</Link></li>
          <li><a href="#menu" className="hover:text-cyan-200">Menu</a></li>
          <li className="relative" onMouseEnter={() => setEventsOpen(true)} onMouseLeave={() => setEventsOpen(false)}>
            <span className="hover:text-white cursor-pointer inline-flex items-center gap-1">Events
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.105l3.71-3.875a.75.75 0 111.08 1.04l-4.25 4.44a.75.75 0 01-1.08 0l-4.25-4.44a.75.75 0 01.02-1.06z"/></svg>
            </span>
            <div className={`absolute left-1/2 -translate-x-1/2 top-full ${eventsOpen ? 'block' : 'hidden'} bg-white text-gray-800 rounded-xl shadow-lg w-60 py-2 ring-1 ring-black/5 z-50`}
                 style={{ top: 'calc(100% + 2px)' }}>
              <Link to="/gallery#top" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
              <Link to="/events/coming#filters" className="block px-4 py-2 hover:bg-gray-100">Coming Events</Link>
              <Link to="/events/past#top" className="block px-4 py-2 hover:bg-gray-100">Past Events</Link>
              <Link to="/#top" className="block px-4 py-2 hover:bg-gray-100">Bar View</Link>
            </div>
          </li>
          <li><Link to="/contact" className="hover:text-cyan-200">Contact</Link></li>
        </ul>

        {/* Button */}
        <a
          href="#reserve"
          className="hidden md:inline-block bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Reserve Table
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✖' : '☰'}
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
            <li><Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><a href="#menu" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Menu</a></li>
            <li className="w-full">
              <div className="text-center font-semibold text-gray-700">Events</div>
              <div className="flex flex-col items-center space-y-2 mt-2">
                <Link to="/gallery" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Gallery</Link>
                <Link to="/events/coming" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Coming Events</Link>
                <Link to="/events/past" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Past Events</Link>
                <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Bar View</Link>
              </div>
            </li>
            <li><a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a></li>
            <a
              href="#reserve"
              className="bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Reserve Table
            </a>
            </ul>
            )}
      </div>
    </nav>
  );
};

export default Navbar;