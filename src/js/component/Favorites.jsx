import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Favorites = () => {
  const {
    store: { favorites },
    actions: { deleteFavorite }
  } = useContext(Context);

  return (
    <div className='dropdown'>
      <button
        className='btn btn-primary dropdown-toggle px-2'
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'>
        Favorites
        <span className='btn btn-secondary mx-2'>
          {
            favorites.length
          }
        </span>
      </button>
      <ul className='dropdown-menu'>
        {
          favorites.length == 0
            ? <li className='dropdown-item'>(Empty)</li>
            : favorites.map((item, index) => {

              const { properties } = item;
              return (
                <li className='d-flex' key={index}>
                  <Link
                    className='dropdown-item'>
                    {properties['name']}
                  </Link>
                  <button
                    className='delete-button'
                    onClick={() => deleteFavorite(item)}>
                    <i className='bi bi-trash-fill'></i>
                  </button>
                </li>
              )
            })
        }
      </ul>
    </div>
  );
};
export default Favorites;