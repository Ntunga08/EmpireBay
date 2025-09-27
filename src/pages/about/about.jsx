import React from "react";
import image from "../../assets/heroImage/image.png";
import sam1 from "../../assets/heroImage/sam1.jpeg"

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to <span className="font-semibold text-blue-800">Empire Bay</span>, 
            where exceptional experiences meet authentic hospitality in the heart of Bagamoyo.
          </p>
        </div>

        {/* Three Column Layout - Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Our Vision */}
          <div className="text-center space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={sam1} 
                alt="Empire Bay Vision" 
                className="w-full h-64 object-cover"
              />
              <div className="bg-blue-900 bg-opacity-20"></div>
            </div>
            <button className="bg-[#142720] hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors">
              Ask More
            </button>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-700 uppercase tracking-wide">
                OUR VISION
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most beloved social destination in Bagamoyo, 
                where every guest experiences the perfect blend of 
                quality beverages, live entertainment, and genuine hospitality.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={image} 
                alt="Empire Bay Mission" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute  bg-blue-900 bg-opacity-20"></div>
            </div>
            <button className="bg-[#142720] hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors">
              Ask More
            </button>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-700 uppercase tracking-wide">
                MISSION STATEMENT
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional bar experiences that bring 
                Value, Quality, and Community connection through 
                premium beverages, live entertainment, and memorable events.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={image} 
                alt="Empire Bay Values" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bg-blue-900 bg-opacity-20"></div>
            </div>
            <button className="bg-[#142720] hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors">
              Ask More
            </button>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-700 uppercase tracking-wide">
                CORE VALUES
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quality,<br/>
                Community, Authenticity,<br/>
                Excellence, Entertainment
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-white p-12 rounded-2xl shadow-lg mt-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-800 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Empire Bay was born from a vision to create more than just a bar – 
                  we wanted to establish a cornerstone of community life in Bagamoyo.
                </p>
                <p>
                  Founded on principles of quality, authenticity, and genuine hospitality, 
                  we've cultivated an atmosphere where locals and visitors alike can 
                  connect over exceptional beverages and unforgettable experiences.
                </p>
                <p>
                  Today, we stand proud as Bagamoyo's premier destination for 
                  live music, premium drinks, and the kind of memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={image} 
                alt="Empire Bay Interior" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="bg-gradient-to-r  from-[#142746] to-[#142720] text-white p-12 rounded-2xl shadow-lg">
          <h3 className="text-4xl font-bold mb-8 text-center">What Sets Us Apart</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl">🍺</span>
              </div>
              <h4 className="text-xl font-semibold">Premium Selection</h4>
              <p className="text-blue-100">Curated local & imported beverages</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <h4 className="text-xl font-semibold">Live Entertainment</h4>
              <p className="text-blue-100">Regular live music and events</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="text-xl font-semibold">Community Hub</h4>
              <p className="text-blue-100">Where friendships are forged</p>
            </div>
            <div className="text-center space-y-3">
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-semibold">Exceptional Service</h4>
              <p className="text-blue-100">Staff dedicated to your experience</p>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-4">Visit Empire Bay</h3>
          <div className="max-w-2xl mx-auto space-y-2 text-gray-700">
            <p className="text-lg"><strong>Location:</strong> 123 Bar Street, Bagamoyo, Tanzania</p>
            <p className="text-lg"><strong>Phone:</strong> +255 700 000 000</p>
            <p className="text-lg"><strong>Email:</strong> info@empirebay.com</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#reserve"
            className="bg-blue-900 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors inline-block"
          >
            Experience Empire Bay Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;