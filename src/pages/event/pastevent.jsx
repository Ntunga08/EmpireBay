import React from 'react';

export default function PastEvents() {
  const items = [
    { id: 1, title: 'Sunset Salsa Night', date: '2025-08-12', summary: 'Latin grooves on the beach at golden hour.' },
    { id: 2, title: 'Reggae Under the Stars', date: '2025-07-28', summary: 'Roots vibes and chilled cocktails.' },
    { id: 3, title: 'Bonfire Acoustic Jam', date: '2025-06-20', summary: 'Guitars, marshmallows, and ocean breeze.' }
  ];

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Past Events</h1>
        <p className="text-gray-600 mt-2">Highlights from our recent beach bar happenings.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((e) => (
            <div key={e.id} className="bg-white rounded-xl shadow p-5">
              <div className="text-sm text-gray-500">{new Date(e.date).toLocaleDateString()}</div>
              <h3 className="mt-1 text-lg font-semibold text-gray-800">{e.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{e.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


