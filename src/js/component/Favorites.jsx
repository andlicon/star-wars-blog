import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Favorites = () => {
  const { store: { favorites } } = useContext(Context);

  return (
    <div className='dropdown'>
      <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
        Favorites
      </button>
      <ul className='dropdown-menu'>
        {
          favorites.length == 0
            ? <li className='dropdown-item'>(Empty)</li>
            : favorites.map((element, index) => {
              return (
                <li key={index}>
                  <Link
                    className='dropdown-item'
                    to={element.url}>
                    {element.name}
                  </Link>
                </li>
              )
            })
        }
      </ul>
    </div>
  );
};
export default Favorites;