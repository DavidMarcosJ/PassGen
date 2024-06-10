import React, { useState } from 'react';
import SearchForm from './SeacrchForm';
import CardList from './CardList';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCards = async (query, filters) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.scryfall.com/cards/search?q=${query}${filters}`);
      const data = await response.json();
      if (data.object === 'error') {
        setCards([]);
        console.error(data.details);
      } else {
        setCards(data.data);
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>MTG Card Search</h1>
      <SearchForm onSearch={fetchCards} />
      {loading ? <p>Loading...</p> : <CardList cards={cards} />}
    </div>
  );
}

export default App;
