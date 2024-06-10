import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    const filters = `${color ? '+color=' + color : ''}${type ? '+type=' + type : ''}`;
    onSearch(query, filters);
  };

  return (
    <div>
      <input
        className='buscador'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Card"
      />
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">All Colors</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
      </select>
      <input
        className='buscadorTipo'
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type (e.g., creature, instant)"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
