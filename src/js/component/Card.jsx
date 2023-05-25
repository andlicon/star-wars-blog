import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import { Context } from '../store/appContext';

const Card = ({ item, keyToShow }) => {
  // Context
  const { actions, store } = useContext(Context);
  const { favorites } = store;
  const { addFavorite, deleteFavorite, isFavorite } = actions;
  const { properties } = item;
  // state
  const [isFavoriteCard, setIsFavoriteCard] = useState(isFavorite(item));

  const handlerLike = () => {
    if (isFavoriteCard) {
      deleteFavorite(item);
    }
    else {
      addFavorite(item);
    }
  }

  useEffect(() => {
    setIsFavoriteCard(isFavorite(item));
  }, [isFavorite(item)]);

  return (
    <div className='card'>
      <img className='card-img-top' src='' alt={`${properties.name} image`} />
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
                <p className='card-text' key={`${item._id}-${index}`}>
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
            className='btn btn-outline-warning'
            onClick={handlerLike}>
            <i className={`bi ${isFavoriteCard ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;