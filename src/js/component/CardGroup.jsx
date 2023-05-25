import React from 'react';
import '../../styles/cardGroup.css'
// components
import Card from './Card.jsx';

const CardGroup = ({ items, title, toShow }) => {
  return (
    <div className='cardGroup my-4'>
      <h2 className='cardGroup__title text-danger'>
        {
          title
        }
      </h2>
      <div className='cardGroup__content'>
        {
          items.map((item) => {
            return <Card
              key={item.uid}
              name={item.name}
              url={item.url}
              toShow={toShow}
              redirect={''}
              isFavorite={item.isFavorite} />
          })
        }
      </div>
    </div>
  );
};
export default CardGroup;