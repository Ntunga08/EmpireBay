import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import back from "../../assets/heroImage/back.jpg";
import sam from "../../assets/heroImage/sam.jpg";
import image from "../../assets/heroImage/image.png";

const eventImages = [
  { id: 1, src: image, alt: "Event 1" },
  { id: 2, src: sam, alt: "Event 2" },
  { id: 3, src: sam, alt: "Event 3" },
  { id: 4, src: back, alt: "Event 4" },
  { id: 5, src: back, alt: "Event 5" },
  { id: 6, src: back, alt: "Event 6" },

  { id: 1, src: image, alt: "Event 1" },
  { id: 2, src: sam, alt: "Event 2" },
  { id: 3, src: sam, alt: "Event 3" },
  { id: 4, src: back, alt: "Event 4" },
  { id: 5, src: back, alt: "Event 5" },
  { id: 6, src: back, alt: "Event 6" },
];

const Gallery = () => {
  return (
    <section className="bg-[#142746] text-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">


                   <div className="fixed top-4 left-4 z-50">
  <Link 
    to="/" 
    className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
  >
    <ArrowLeft className="w-4 h-4 mr-2" />
    Back to Home
  </Link>
</div>
        
        <h2 className="text-teal-400 uppercase font-semibold">Gallery</h2>
        <h3 className="text-3xl md:text-4xl font-bold mt-2">
          Take a glimpse into our unforgettable events
        </h3>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
  {eventImages.map((img, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-64 h-64 object-cover mx-auto"
      />
    </div>
  ))}
</div>
    </section>
  );
};

export default Gallery;
