import React, { useEffect, useState } from 'react';
import './card.css';

const Card = ({ name, manaCost, imageUrl }) => (
  <div className="bigContainer">
    <img className="imgCarta" src={imageUrl} alt={name} />
    <h2 className="nombreCarta">{name}</h2>
    <h3 className="costeMana">{manaCost}</h3>
  </div>
);

const CardC= () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = 'https://api.magicthegathering.io/v1';
    fetch(`${api}/cards`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setCards(data.cards);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="cardContainer">
      {cards.map((card, index) =>
        card.imageUrl ? (
          <Card
            key={index}
            name={card.name}
            manaCost={card.manaCost}
            imageUrl={card.imageUrl}
          />
        ) : null
      )}
    </div>
  );
};

export default CardC;
