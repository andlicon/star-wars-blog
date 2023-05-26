import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Favorites = () => {
  const { store, actions } = useContext(Context);
  const { favorites } = store;
  const { updateFavorite } = actions;

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
            ? <li className='dropdown-item text-center'>(Empty)</li>
            : favorites.map((item) => {

              const { properties } = item;
              return (
                <li className='d-flex' key={`favorite${item._id}`}>
                  <Link
                    className='dropdown-item'
                    to={properties.url.split(/https:.+\/api\//)[1]} >
                    {properties['name']}
                  </Link>
                  <button
                    className='delete-button'
                    onClick={() => updateFavorite(item)} >
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