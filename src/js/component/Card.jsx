import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/card.css';
import { Context } from '../store/appContext';

const Card = ({ name, url, group, id }) => {

  const { actions } = useContext(Context);

  const handlerLike = () => {
    actions.addFavorite(name, group, id);
  }

  const toDisplay = () => {
    let propiertiesArray = [];

    if (group == 'people') {
      propiertiesArray = ['gender', 'hair_color', 'eye_color'];
    }
    else if (group == 'planets') {
      propiertiesArray = ['population', 'terrain'];
    }
    else if (group == 'vehicles') {
      propiertiesArray = ['crew', 'passengers', 'cargo_capacity', 'cost_in_credits'];
    }

    return propiertiesArray;
  }

  useEffect(() => {
    const properties = toDisplay();
    console.log(properties);

    fetch(url).
      then(response => response.json())
      .then(data => console.log(data.result));
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