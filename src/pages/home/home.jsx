import React from "react";
import heroImage from "../../../assets/back.jpg";
;

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      <div className="absolute inset-0">
        <img
          src=''
          alt="Bar Atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Experience the Best Drinks & Events in [City Name]
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          From live music and festivals to weddings, boxing nights, and more!
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#reserve"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book a Table
          </a>
          <a
            href="#events"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Check Events
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-white text-2xl">⌄</span>
      </div>
    </section>
  );
};

export default HeroSection;
