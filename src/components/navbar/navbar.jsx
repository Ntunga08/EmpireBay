import React from "react";



const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-900">Empire Bay</h1>

        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#menu" className="hover:text-blue-600">Menu</a></li>
          <li><a href="#events" className="hover:text-blue-600">Events</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
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
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#menu" className="hover:text-blue-600">Menu</a></li>
            <li><a href="#events" className="hover:text-blue-600">Events</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
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
