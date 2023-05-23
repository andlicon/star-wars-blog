import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/home.css';

const Home = () => {
  const { store: { endpoints } } = useContext(Context);

  console.log(endpoints);

  return (
    <>
      {
        endpoints.map((endp) => {
          return (
            <div className='div'>
              <h2>{endp}</h2>

            </div>
          )
        })
      }
    </>
  );
};
export default Home;