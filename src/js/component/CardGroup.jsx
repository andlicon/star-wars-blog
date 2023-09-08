import React from 'react';
import '../../styles/cardGroup.css'
import useScroll from '../hooks/useScroll.jsx';
// components
import Card from './Card.jsx';

const CardGroup = ({
  items,
  title,
  keyToShow,
  id,
  endpoint }) => {
  const { } = useScroll(id, endpoint);

  return (
    <div className="container">
      <div className='cardGroup my-4 p-3' id={id}>
        <div id={`${id}-content`} className='cardGroup__content'>
          {
            items.map((item) => {
              return <Card
                key={item._id}
                keyToShow={keyToShow}
                type={title}
                item={item} />
            })
          }
        </div>
      </div>
    </div>
  );
};
export default CardGroup;