import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import {
  capitalize
} from '../services/string';

const Card = ({ item, keyToShow, type }) => {
  // Context
  const { actions } = useContext(Context);
  const { updateFavorite, isFavorite } = actions;
  const { properties } = item;

  return (
    <div className='card'>
      <img className='card-img-top'
        src={`https://starwars-visualguide.com/assets/img/${type.toLowerCase()}/${item?.uid}.jpg`}
        alt={`${properties?.name} image`} />
      <div className='card-body'>
        <h5 className='card-title'>
          {
            properties?.name
          }
        </h5>
        <div className='card-content mb-3'>
          {
            (keyToShow).map((key, index) => {
              const attribute = capitalize(key.replaceAll('_', ' '));
              const value = capitalize(properties[key]);

              return (
                <p className='card-text' key={`${item?._id}-${index}`}>
                  <span className='card-text--bold'>
                    {
                      attribute
                    }
                  </span>:
                  {
                    ` ${value}`
                  }
                </p>
              )
            })
          }
        </div>
        <div className='card__interact d-flex justify-content-between'>
          <Link
            to={properties?.url?.split(/https:.+\/api\//)[1]}
            className='btn btn-outline-primary'>
            Learn more!
          </Link>
          <button
            className='btn btn-outline-warning'
            onClick={() => updateFavorite(item)} >
            <i className={`bi ${isFavorite(item) ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;