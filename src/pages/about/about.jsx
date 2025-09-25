import React from "react";
import image from "../../assets/heroImage/image.png";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-blue-800">Empire Bay</span>, 
          the ultimate spot in Bagamoyo to relax, enjoy live music, and sip the finest beers.  
          We’re more than a bar — we’re a community of friends, laughter, and unforgettable nights.
        </p>

        {/* Story + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
        src={image}
            alt="Our Bar"
            className="rounded-2xl shadow-lg"
          />
          <div className="text-left">
            <h3 className="text-4xl font-semibold text-blue-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 text-xl leading-relaxed mb-4">
              Empire Bay was founded with one vision — to bring people together
              over great drinks, live events, and an atmosphere that feels like home.  
              Whether it’s game night, karaoke, or just a chill evening, we’re here to make it special.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a wide variety of beers, signature cocktails, and weekly events, 
              we’re proud to be the go-to bar for fun, friendship, and flavor.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#reserve"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
