import React from 'react';
import '../../styles/card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img className='card-img-top' src='' alt={`${props.name} image`} />
      <div className='card-body'>
        <h5 className='card-title'>
          {
            props.name
          }
        </h5>
        <p className='card-text'>

        </p>
        <div className='card__interact d-flex'>
          <a href='#' className='btn btn-primary'>Learn more!</a>
          {/* falta el boton de like */}
          <p>a</p>
        </div>
      </div>
    </div>
  );
};
export default Card;