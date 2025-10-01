import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex bg-[#142746] justify-between items-center rounded-full  ">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Empire Bay</h1>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium items-center">
          <li><Link to="/" className="hover:text-green-200">Home</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
          <li><a href="#menu" className="hover:text-white">Menu</a></li>
          <li className="relative group">
            <span className="hover:text-white cursor-pointer">Events</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white text-gray-800 rounded-lg shadow-lg w-56 py-2">
              <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
              <Link to="/events/coming" className="block px-4 py-2 hover:bg-gray-100">Coming Events</Link>
              <Link to="/events/past" className="block px-4 py-2 hover:bg-gray-100">Past Events</Link>
              <Link to="/" className="block px-4 py-2 hover:bg-gray-100">Bar View</Link>
            </div>
          </li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        {/* Button */}
        <a
          href="#reserve"
          className="hidden md:inline-block bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Reserve Table
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700 text-3xl"
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