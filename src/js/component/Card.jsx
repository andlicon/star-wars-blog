import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import { Context } from '../store/appContext';

const Card = ({ name, url, group, id }) => {
  const { actions } = useContext(Context);

  const handlerLike = () => {
    actions.addFavorite(name, group, id);
  }

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
          <button onClick={handlerLike}>Like</button>
        </div>
      </div>
    </div>
  );
};
export default Card;