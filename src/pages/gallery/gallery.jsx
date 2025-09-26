import React from 'react';

const eventImages = [
  { id: 1, src: "/image/event1.jpg", alt: "Event 1" },
  { id: 2, src: "/images/event2.jpg", alt: "Event 2" },
  { id: 3, src: "/images/event3.jpg", alt: "Event 3" },
  { id: 4, src: "/images/event4.jpg", alt: "Event 4" },
  { id: 5, src: "/images/event5.jpg", alt: "Event 5" },
  { id: 6, src: "/images/event6.jpg", alt: "Event 6" },
];

const Gallery =() =>{

            return (
    <section className="bg-[#142746] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-teal-400 uppercase font-semibold">Gallery</h2>
        <h3 className="text-3xl md:text-4xl font-bold mt-2">
          Take a glimpse into our unforgettable events
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {eventImages.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

    </section>)


           
}

export default Gallery;