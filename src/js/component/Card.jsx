import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import { Context } from '../store/appContext';

//No necesito GROUP ni ID, con URL determinar el /people/1 y tal

const Card = ({ name, url, toShow, group, id, isFavorite }) => {
  // hooks
  const { actions } = useContext(Context);
  const [properties, setProperties] = useState({});
  const [selected, setSelected] = useState(isFavorite);

  const handlerLike = () => {
    const newUrl = url.replace(/https.+\/api/, '');
    setSelected(!selected);
    actions.addFavorite(name, newUrl);
  }

  useEffect(() => {
    actions.getProperties(url, toShow)
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
          {/* falta el boton de like */}
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