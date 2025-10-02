import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";

// Placeholder data (replace with backend later)
const eventsData = [
  { id: 1, title: "Sunset DJ Party", date: "2025-10-18", description: "Dance into the golden hour with tropical house.", image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600&auto=format&fit=crop" },
  { id: 2, title: "Full Moon Bonfire", date: "2025-10-25", description: "Acoustic guitars and moonlit waves.", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop" },
  { id: 3, title: "Tropical Cocktail Night", date: "2025-10-28", description: "Island band and signature cocktails.", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600&auto=format&fit=crop" }
];

const menuItems = [
  { id: 1, name: "Coral Crush", type: "Cocktail", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1400&auto=format&fit=crop" },
  { id: 2, name: "Aqua Breeze", type: "Cocktail", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1400&auto=format&fit=crop" },
  { id: 3, name: "Island Platter", type: "Cuisine", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop" },
  { id: 4, name: "Sunset Salsa", type: "Cuisine", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1400&auto=format&fit=crop" }
];

const hours = [
  { day: "Mon - Thu", time: "5:00 PM – 12:00 AM" },
  { day: "Fri - Sun", time: "4:00 PM – 2:00 AM" }
];

const HeroBanner = () => {
  const bgUrl = "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2000&auto=format&fit=crop";
  return (
    <section
      className="relative w-full h-[70vh] min-h-[420px] bg-center bg-cover"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow">Welcome to Empire Bay Beach Bar</h1>
          <p className="mt-3 md:mt-4 text-lg md:text-2xl opacity-95">Cocktails, Music & Ocean Breeze</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/events/coming" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold">See Upcoming Events</Link>
            <Link to="/booking" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Book a Table</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">A Beach Vibe Like No Other</h2>
          <p className="mt-3 text-gray-600">At Empire Bay, sunsets meet soundtracks. Enjoy signature cocktails, live beats, and bonfires—right by the ocean. Your perfect night starts here.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop" alt="Cocktail" />
          <img className="rounded-xl shadow" src="https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1200&auto=format&fit=crop" alt="Palms" />
          <img className="rounded-xl shadow col-span-2" src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1600&auto=format&fit=crop" alt="Bonfire on beach" />
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { title: "Live Music & DJs", emoji: "🎶", text: "Nightly sounds from island chill to upbeat dance." },
    { title: "Cocktails & Cuisine", emoji: "🍹", text: "Signature mixes and fresh coastal bites." },
    { title: "Beach Vibes & Bonfires", emoji: "🔥", text: "Golden-hour bonfires with friends and acoustic sets." },
    { title: "Private Parties", emoji: "🎉", text: "Book your celebration with a stunning ocean backdrop." }
  ];
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Highlights</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-orange-50 rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <div className="text-3xl" aria-hidden>{f.emoji}</div>
              <h3 className="mt-3 font-semibold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventsPreview = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => { api.getUpcomingEvents(3).then(setEvents).catch(() => setEvents([])); }, []);
  return (
    <section className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
          <Link to="/events/coming" className="text-cyan-700 font-semibold hover:underline">View All Events</Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <img src={e.image_url || "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1600&auto=format&fit=crop"} alt={e.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <div className="text-sm text-gray-500">{new Date(e.date).toLocaleDateString()}</div>
                <h3 className="mt-1 text-lg font-semibold text-gray-800">{e.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpecialsTeaser = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => { api.getFeaturedMenu(4).then(setMenu).catch(() => setMenu([])); }, []);
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <h2 className="text-3xl font-bold text-gray-800">Specials & Menu</h2>
          <a href="#menu" className="text-cyan-700 font-semibold hover:underline">View Full Menu</a>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {menu.map((m) => (
            <div key={m.id} className="bg-orange-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={m.image_url || "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1400&auto=format&fit=crop"} alt={m.name} className="h-32 w-full object-cover" />
              <div className="p-4">
                <div className="text-xs uppercase text-gray-500">{m.type}</div>
                <div className="font-semibold text-gray-800">{m.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => { api.getFeaturedGallery(6).then(setPhotos).catch(() => setPhotos([])); }, []);
  return (
    <section className="bg-orange-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center">The Atmosphere</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p) => (
            <img key={p.id} src={p.image_url} alt={p.title} className="rounded-xl h-40 md:h-48 w-full object-cover shadow" />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-white" id="visit">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Visit Us</h2>
          <div className="mt-4 space-y-2 text-gray-700">
            {hours.map((h) => (
              <div key={h.day} className="flex items-center justify-between bg-orange-50 rounded-lg p-3">
                <span className="font-medium">{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-gray-700 space-y-1">
            <div><strong>Phone:</strong> +255 700 000 000</div>
            <div><strong>Email:</strong> info@empirebay.com</div>
            <div><strong>Social:</strong> @empirebay (IG/FB)</div>
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              title="Empire Bay Location"
              src="https://maps.google.com/maps?q=bagamoyo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 md:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Plan Your Night at Empire Bay Beach Bar</h2>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to="/booking" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">Book Now</Link>
          <Link to="/events/coming" className="bg-white text-cyan-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold">See Events</Link>
        </div>
      </div>
    </section>
  );
};

export default function BarView() {
  return (
    <div className="bg-orange-50">
      <HeroBanner />
      <AboutSection />
      <FeaturesSection />
      <EventsPreview />
      <SpecialsTeaser />
      <GallerySection />
      <ContactSection />
      <FinalCTA />
    </div>
  );
}


