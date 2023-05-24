import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import { Context } from '../store/appContext';

const Card = ({ name, url, redirect, toShow, isFavorite }) => {
  // hooks
  const { actions: {
    addFavorite,
    getProperties,
    deleteFavorite }
  } = useContext(Context);
  const { store } = useContext(Context);
  const [properties, setProperties] = useState({});
  //Matches with its own representation inside the results array
  const [favorite, setFavorite] = useState(store[redirect.split('/')[1]].find((e) => e.url == url).isFavorite);

  const handlerLike = () => {
    if (isFavorite) {
      deleteFavorite(redirect);
    }
    else {
      addFavorite(name, redirect);
    }
  }

  useEffect(() => {
    getProperties(url, toShow)
      .then(response => setProperties(response))
  }, []);

  //When its own representation inside the results array change, it change too
  useEffect(() => {
    setFavorite(store[redirect.split('/')[1]].find((e) => e.url == url).isFavorite);
  }, [store[redirect.split('/')[1]].find((e) => e.url == url).isFavorite]);

  return (
    <div className='card'>
      <img className='card-img-top' src='' alt={`${name} image`} />
      <div className='card-body'>
        <h5 className='card-title'>
          {
            name
          }
        </h5>
        <div className='card-content mb-3'>
          {
            Object.keys(properties).map((key, index) => {
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
            to={redirect}
            className='btn btn-outline-primary'>
            Learn more!
          </Link>
          <button
            className='btn btn-outline-warning'
            onClick={handlerLike}>
            <i className={`bi ${favorite ? 'bi-heart-fill' : 'bi-heart'} favorite-icon`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;