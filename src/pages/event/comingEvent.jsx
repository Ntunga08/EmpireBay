import React, { useMemo, useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

// Hero Banner Component
const HeroBanner = () => {
  const bgUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop';
  return (
    <div
      className="relative h-64 md:h-80 lg:h-96 w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow">Good Times Await – Upcoming Events at Our Beach Bar</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg opacity-95">Sunsets, palm trees, music, and memories. Find your next beach vibe below.</p>
        </div>
      </div>
    </div>
  );
};

// Filter Bar Component
const FilterBar = ({ category, onCategoryChange, startDate, endDate, onStartDate, onEndDate, categories }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
        >
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      </div>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Start date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDate(e.target.value)}
          className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
        />
      </div>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">End date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDate(e.target.value)}
          className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
        />
      </div>
      <div className="col-span-1 flex items-end">
        <div className="text-gray-600 text-sm">Showing filtered results</div>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event }) => {
  const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">{event.title}</h3>
          <div className="text-2xl" aria-hidden>{event.image}</div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2"><Calendar size={16} className="text-cyan-600" /><span>{formatDate(event.date)}</span></div>
          <div className="flex items-center gap-2"><Clock size={16} className="text-orange-500" /><span>{event.time}</span></div>
          <div className="flex items-center gap-2"><MapPin size={16} className="text-pink-500" /><span>{event.location}</span></div>
          <div className="flex items-center gap-2"><Users size={16} className="text-emerald-600" /><span>Capacity: {event.capacity}</span></div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-base md:text-lg font-bold text-cyan-700">{event.price}</span>
          <button className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold">Details</button>
        </div>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      <button
        onClick={onPrev}
        disabled={page === 1}
        className="px-4 py-2 rounded-full bg-white shadow disabled:opacity-50 hover:bg-gray-50"
      >Prev</button>
      <div className="text-sm text-gray-700">Page {page} of {totalPages}</div>
      <button
        onClick={onNext}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-full bg-white shadow disabled:opacity-50 hover:bg-gray-50"
      >Next</button>
    </div>
  );
};

export default function ComingEvents() {
  const [category, setCategory] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [page, setPage] = useState(1);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'live', name: 'Live Music' },
    { id: 'bonfire', name: 'Bonfire' },
    { id: 'dj', name: 'DJ Night' },
    { id: 'games', name: 'Beach Games' },
  ];

  const events = [
    { id: 1, title: 'Sunset DJ Party', date: '2025-10-18', time: '18:00', category: 'dj', location: 'Sunset Deck', capacity: 150, price: '$20', image: '🎧', description: 'Dance into the golden hour with tropical house and chill beats.' },
    { id: 2, title: 'Full Moon Bonfire', date: '2025-10-25', time: '20:00', category: 'bonfire', location: 'North Beach', capacity: 100, price: 'Free', image: '🔥', description: 'Acoustic guitars, marshmallows, and moonlit waves.' },
    { id: 3, title: 'Tropical Cocktail Night', date: '2025-10-28', time: '19:00', category: 'live', location: 'Main Stage', capacity: 200, price: '$25', image: '🍹', description: 'Live island band and signature cocktails all night.' },
    { id: 4, title: 'Beach Volleyball League', date: '2025-11-02', time: '16:00', category: 'games', location: 'South Courts', capacity: 80, price: '$10', image: '🏐', description: 'Join or cheer! Teams compete in friendly beach matches.' },
    { id: 5, title: 'Reggae on the Shore', date: '2025-11-08', time: '19:30', category: 'live', location: 'Palm Grove', capacity: 220, price: '$30', image: '🎶', description: 'Roots reggae vibes with ocean breezes and island snacks.' },
    { id: 6, title: 'Fire Dance Showcase', date: '2025-11-15', time: '20:00', category: 'bonfire', location: 'Tiki Circle', capacity: 120, price: '$18', image: '🔥', description: 'Mesmerizing fire performances and rhythmic drums.' },
    { id: 7, title: 'Sandy Sprints & Games', date: '2025-11-22', time: '15:00', category: 'games', location: 'Open Beach', capacity: 90, price: '$8', image: '🏃‍♂️', description: 'Beach races, tug-of-war, and fun challenges for all ages.' },
    { id: 8, title: 'Coral Beats DJ Night', date: '2025-11-29', time: '21:00', category: 'dj', location: 'Reef Bar', capacity: 180, price: '$22', image: '🎛️', description: 'High-energy DJ set with coral/cyan visuals and lights.' },
  ];

  const filtered = useMemo(() => {
    const byCategory = category === 'all' ? events : events.filter(e => e.category === category);
    const byStart = startDate ? byCategory.filter(e => new Date(e.date) >= new Date(startDate)) : byCategory;
    const byEnd = endDate ? byStart.filter(e => new Date(e.date) <= new Date(endDate)) : byStart;
    return byEnd;
  }, [category, startDate, endDate]);

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIdx = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(startIdx, startIdx + pageSize);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  // Reset to page 1 when filters change
  React.useEffect(() => { setPage(1); }, [category, startDate, endDate]);

  return (
    <div className="min-h-screen bg-orange-50">
      <HeroBanner />

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <FilterBar
          category={category}
          onCategoryChange={setCategory}
          startDate={startDate}
          endDate={endDate}
          onStartDate={setStartDate}
          onEndDate={setEndDate}
          categories={categories}
        />

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {pageItems.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {pageItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-3">🏝️</div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">No events match your filters</h3>
            <p className="text-gray-500">Try adjusting the category or date range.</p>
          </div>
        )}

        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}