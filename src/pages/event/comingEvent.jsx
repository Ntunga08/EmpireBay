import React from 'react';
import { Calendar, Users, Trophy, Clock , Mappin, Heart , Star } from 'lucide-react';

const CommingEvents =()=>{
    const [selectedCategory , setselectedCategory ] = useState('all');

}



import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Music, Heart, Trophy, Star } from 'lucide-react';

export default function BeachBarEvents() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: "Sunset Wedding Celebration",
      date: "2025-10-15",
      time: "17:00",
      category: "wedding",
      location: "Beach Front Pavilion",
      capacity: 120,
      price: "Private Event",
      image: "🏖️",
      description: "Romantic beachfront wedding with ocean views and tropical vibes",
      featured: true
    },
    {
      id: 2,
      title: "Caribbean Music Festival",
      date: "2025-10-28",
      time: "19:00",
      category: "music",
      location: "Main Beach Stage",
      capacity: 300,
      price: "$45",
      image: "🎵",
      description: "Live reggae, calypso, and steel drum performances under the stars",
      featured: true
    },
    {
      id: 3,
      title: "Beach Boxing Championship",
      date: "2025-11-08",
      time: "20:00",
      category: "boxing",
      location: "Sand Ring Arena",
      capacity: 200,
      price: "$60",
      image: "🥊",
      description: "Professional boxing matches with ocean breeze and cocktails"
    },
    {
      id: 4,
      title: "Tropical Wedding Reception",
      date: "2025-11-20",
      time: "16:30",
      category: "wedding",
      location: "Tiki Lounge Area",
      capacity: 80,
      price: "Private Event",
      image: "💒",
      description: "Intimate wedding celebration with tiki torches and island cuisine"
    },
    {
      id: 5,
      title: "Jazz & Blues Night",
      date: "2025-11-25",
      time: "21:00",
      category: "music",
      location: "Sunset Deck",
      capacity: 150,
      price: "$35",
      image: "🎷",
      description: "Smooth jazz and blues with premium cocktails and ocean views"
    },
    {
      id: 6,
      title: "Amateur Boxing Tournament",
      date: "2025-12-05",
      time: "18:00",
      category: "boxing",
      location: "Beach Court",
      capacity: 250,
      price: "$25",
      image: "🏆",
      description: "Local boxing talent showcase with beach barbecue and drinks"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: Star, color: 'bg-blue-500' },
    { id: 'wedding', name: 'Weddings', icon: Heart, color: 'bg-pink-500' },
    { id: 'music', name: 'Music', icon: Music, color: 'bg-purple-500' },
    { id: 'boxing', name: 'Boxing', icon: Trophy, color: 'bg-orange-500' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'wedding': return '💕';
      case 'music': return '🎶';
      case 'boxing': return '🥊';
      default: return '⭐';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      {/* Header */}
      <div className="relative h-80 bg-gradient-to-r from-orange-400 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse">
              🏖️ Upcoming Events
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Paradise Beach Bar - Where Memories Are Made
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0,120 Q300,60 600,120 T1200,120 L1200,0 L0,0 Z" fill="rgb(59 130 246)" opacity="0.8"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">Choose Your Experience</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg`
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                  }`}
                >
                  <IconComponent size={20} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${
                event.featured ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
              }`}
            >
              {event.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-center py-2">
                  <span className="text-white font-bold text-sm">⭐ FEATURED EVENT ⭐</span>
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{event.image}</div>
                  <span className="text-2xl">{getCategoryIcon(event.category)}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-500" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-green-500" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-red-500" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-purple-500" />
                    <span>Capacity: {event.capacity} people</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    {event.price}
                  </span>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏖️</div>
            <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
            <p className="text-white opacity-80">Try selecting a different category</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            🌴 Ready to Book Your Event? 🌴
          </h3>
          <p className="text-white text-lg mb-6 opacity-90">
            Contact us to reserve your date and create unforgettable memories at Paradise Beach Bar
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
              📞 Call Now
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:from-orange-600 hover:to-pink-600 transition-all duration-300">
              📧 Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}