import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/details.css';

const DetailsPeople = () => {
  // hooks
  const [nature,] = useState('people');
  const { id } = useParams();
  const { store } = useContext(Context);
  const [item, setItem] = useState({});

  useEffect(() => {
    const item = store[nature].find((element) => element.uid == id);

    setItem(item);
  }, []);

  return (
    <div className='details'>
      <div className='details-resume d-flex'>
        <img
          src={`https://starwars-visualguide.com/assets/img/${nature == 'people' ? 'characters' : nature}/${id}.jpg`}
          alt=''
          className='details-image w-50 p-4' />
        <div className='details-resume-content w-50 p-4'>
          <h2 className='details-title'>{item.properties?.name}</h2>
          <p className='details-resume-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, deserunt?
            Expedita consequatur optio, animi possimus eveniet laborum et at voluptate
            reprehenderit officiis distinctio, non atque velit ea. Fugit, ipsa esse.
          </p>
        </div>
      </div>
      <hr className='text-danger hr'></hr>
      <div className='details-content d-flex justify-content-between text-danger'>

      </div>
    </div>
  );
};
export default DetailsPeople;