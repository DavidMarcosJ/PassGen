import React, { useEffect, useState } from 'react';
import './components/card.css';

const Card = ({ name, manaCost, imageUrl, color }) => (
  <div className="bigContainer">
    <img className="imgCarta" src={imageUrl} alt={name} />
    <h2 className="nombreCarta">{name}</h2>
    <h3 className="costeMana">{manaCost}</h3>
    <p>{color}</p>
  </div>
);

const App = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [filterName, setFilterName] = useState('');
  const [filterColor, setFilterColor] = useState('');

  useEffect(() => {
    const api = 'https://api.magicthegathering.io/v1';
    fetch(`${api}/cards`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok'); /*Validar respuesta de API*/
        }
        return res.json();
      })
      .then((data) => {
        const validCards = data.cards.filter(card => card.imageUrl); /*Validar url valida */
        setCards(validCards);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const filterCards = () => {
    let filteredCards = cards;
    if (filterName) {
      filteredCards = filteredCards.filter(card => card.name.toLowerCase().includes(filterName.toLowerCase())); /*Filtrar cartas por nombre en minúscula */
    }
    if (filterColor) {
      filteredCards = filteredCards.filter(card => card.colors && card.colors.includes(filterColor)); /*Filtrar cartas por color */
    }
    return filteredCards;
  };

  const handleNameFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleColorFilterChange = (event) => {
    setFilterColor(event.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Filtrar por nombre"
          value={filterName}
          onChange={handleNameFilterChange}
        />
        <select value={filterColor} onChange={handleColorFilterChange}>
          <option value="">Filtrar por color</option>
          <option value="W">Blanco</option>
          <option value="U">Azul</option>
          <option value="B">Negro</option>
          <option value="R">Rojo</option>
          <option value="G">Verde</option>
        </select>
      </div>
      <div className="cardContainer">
        {filterCards().map((card, index) => (
          <Card
            key={index}
            name={card.name}
            manaCost={card.manaCost}
            imageUrl={card.imageUrl}
            color={card.colors}
          />
        ))}
      </div>
    </div>
  );
};



const banner = document.createElement("div");
const titulo = document.createElement("h1");
const logo = document.createElement("img");
banner.className = "banner";
logo.className = "logo";
logo.setAttribute("src","./src/components/img/logo.png");
document.body.appendChild(banner);
banner.appendChild(titulo);
export default App;
