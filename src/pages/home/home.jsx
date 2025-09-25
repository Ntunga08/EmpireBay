import React, { useState, useEffect } from "react";
import back from "../../assets/heroImage/back.jpg";
import sam from "../../assets/heroImage/sam.jpg";
import image from "../../assets/heroImage/image.png";

const slides = [
  {
    image: back,
    message: "Welcome to Empire Bay - Feel the Vibe",

  },
  {
    image: sam,
    message: "Discover the Best Drinks in Town",
  },
  {
    image: image,
    message: "Relax, Refresh, and Reconnect",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Sliding Wrapper */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-screen flex-shrink-0 relative"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
              <p className="uppercase tracking-widest text-sm md:text-base mb-3 text-blue-300 animate-pulse">
                {slide.message}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Experience the Best Drinks & Events in Bagamoyo
              </h1>
              <p className="text-lg md:text-2xl mb-8 text-gray-200">
                From live music and festivals to weddings, boxing nights, and more!
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href="#reserve"
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
                >
                  Book a Table
                </a>
                <a
                  href="#events"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black hover:scale-105 transition transform duration-300"
                >
                  Check Events
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
