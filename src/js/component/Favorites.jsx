import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Favorites = () => {
  const { store: { favorites } } = useContext(Context);

  console.log(favorites);

  return (
    <div className='dropdown'>
      <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
        Favorites
      </button>
      <ul className='dropdown-menu'>
        {
          (favorites == null)
            ? <li className='dropdown-item'>(Empty)</li>
            : favorites.map((element, index) => {
              return (
                <li key={index}
                  className='dropdown-item'>
                  {
                    element
                  }
                </li>
              )
            })
        }
        {
          /* <li><a className='dropdown-item' href='#'>Action</a></li>
        <li><a className='dropdown-item' href='#'>Another action</a></li>
        <li><a className='dropdown-item' href='#'>Something else here</a></li> */
        }
      </ul>
    </div>
  );
};
export default Favorites;