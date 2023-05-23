import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/home.css';

const Home = () => {
  const { store, store: { endpoints } } = useContext(Context);

  return (
    <>
      {
        endpoints.map((endp, index) => {
          return (
            <div key={index} className='card-group'>
              <h2>{endp}</h2>
              {
                console.log(store[endp].results)
                // store[endp].results.map((elements, index) => {
                //   <p key={index}>
                //     {'ajo'}
                //   </p>
                // })
              }
            </div>
          )
        })
      }
    </>
  );
};
export default Home;