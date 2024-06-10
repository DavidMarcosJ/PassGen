import React from 'react';

function CardList({ cards }) {
  return (
    <div className='mostrador'>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        <ul>
          {cards.map((card) => (
            <li key={card.id}>
              {card.image_uris?.normal && <img src={card.image_uris.normal} alt={card.name} />}
              <div className='mostradorDatos'>
                <h2>{card.name}</h2>
                <p>{card.type_line}</p>
                <p className='subtext'>{card.oracle_text}</p>
              
                <div className='legals'>
                    <ul>
                    {Object.entries(card.legalities).map(([format, legality]) => (
                        <li key={format}>
                             <span style={{ backgroundColor: legality === 'legal' ? '#75986e' : '#cc7d83' }} className='legalidad'>{legality}</span><span className='formatos'>{format.charAt(0).toUpperCase() + format.slice(1)}</span>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}
export default CardList;
