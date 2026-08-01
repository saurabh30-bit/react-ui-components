import React, { useState } from 'react';

export const SearchBar = ({ onSearch, placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = (e) => { e.preventDefault(); onSearch(query); };
  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
      <button type="submit" className="absolute right-2 p-1 text-gray-400 hover:text-blue-600">Go</button>
    </form>
  );
};
