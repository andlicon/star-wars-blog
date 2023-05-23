import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';

const Card = ({ name, url, group, id }) => {
  return (
    <div className='card'>
      <img className='card-img-top' src='' alt={`${name} image`} />
      <div className='card-body'>
        <h5 className='card-title'>
          {
            name
          }
        </h5>
        <p className='card-text'>

        </p>
        <div className='card__interact d-flex justify-content-between'>
          <Link to={`/${group}/${id}`} className='btn btn-primary'>Learn more!</Link>
          {/* falta el boton de like */}
          <p>a</p>
        </div>
      </div>
    </div>
  );
};
export default Card;