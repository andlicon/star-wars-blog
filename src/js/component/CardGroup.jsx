import React from 'react';

const CardGroup = (props) => {
  console.log(props.items);

  return (
    <div className='cardGroup'>
      <h2 className='cardGroup__title text-danger'>
        {
          props.title
        }
      </h2>
      <div className='cardGroup__content d-flex flex-nowrap'>
        {
          props.items.map((element, index) => {
            return <p key={index}>{element.name}</p>
          })
        }
      </div>
    </div>
  );
};
export default CardGroup;