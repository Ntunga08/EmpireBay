import React from "react";
import heroImage from "../../assets/heroImage/back.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bar Atmosphere"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        {/* Tagline */}
        <p className="uppercase tracking-widest text-sm md:text-base mb-3 text-blue-300 animate-pulse">
          Welcome to Empire Bay
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

        {/* Small Social Proof */}
        <p className="mt-6 text-sm text-gray-300 italic">
          ★ Rated #1 nightlife spot in [City Name]
        </p>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
