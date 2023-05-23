import React from 'react';
import '../../styles/cardGroup.css'
// components
import Card from './Card.jsx';

const CardGroup = ({ items, title }) => {
  return (
    <div className='cardGroup'>
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
              group={title.toLowerCase()}
              id={item.uid} />
          })
        }
      </div>
    </div>
  );
};
export default CardGroup;