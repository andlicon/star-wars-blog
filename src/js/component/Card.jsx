import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import { Context } from '../store/appContext';

const Card = ({ name, url, toShow, isFavorite }) => {
  // hooks
  const { actions: {
    addFavorite,
    getProperties,
    deleteFavorite }
  } = useContext(Context);
  const [properties, setProperties] = useState({});
  const [selected, setSelected] = useState(isFavorite);

  const handlerLike = () => {
    const newUrl = url.replace(/https.+\/api/, '');

    if (selected) {
      deleteFavorite(name, newUrl);
    }
    else {
      addFavorite(name, newUrl);
    }

    setSelected(!selected);
  }

  useEffect(() => {
    getProperties(url, toShow)
      .then(response => setProperties(response))
  }, []);

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
            to={url.replace(/https.+\/api/, '')}
            className='btn btn-outline-primary'>
            Learn more!
          </Link>
          <button
            className='btn btn-outline-warning'
            onClick={handlerLike}>
            <i className={`bi ${selected ? 'bi-heart-fill' : 'bi-heart'} favorite-icon`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;