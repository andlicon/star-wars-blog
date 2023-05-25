import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import { Context } from '../store/appContext';

const Card = ({ item, keyToShow }) => {
  // hooks
  const { actions } = useContext(Context);
  const { addFavorite, getProperties, deleteFavorite } = actions;
  const { properties } = item;

  console.log(keyToShow);

  return (
    <div className='card'>
      <img className='card-img-top' src='' alt={`${name} image`} />
      <div className='card-body'>
        <h5 className='card-title'>
          {
            properties.name
          }
        </h5>
        <div className='card-content mb-3'>
          {
            (keyToShow).map((key, index) => {
              return (
                <p className='card-text' key={index}>
                  <span className='card-text--bold'>
                    {
                      key.replaceAll('_', ' ')
                    }
                  </span>:
                  {
                    ` ${properties[key]}`
                  }
                </p>
              )
            })
          }
        </div>
        <div className='card__interact d-flex justify-content-between'>
          <Link
            // to={redirect}
            className='btn btn-outline-primary'>
            Learn more!
          </Link>
          <button
            className='btn btn-outline-warning'>
            <i className={`bi bi-heart`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;