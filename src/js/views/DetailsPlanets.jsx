import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/details.css';

const DetailsPlanets = () => {
  // hooks
  const [nature,] = useState('planets');
  const { id } = useParams();
  const { actions } = useContext(Context);
  const { getItem } = actions;
  const [item, setItem] = useState({});

  useEffect(() => {
    const item = getItem(nature, id);

    setItem(item);
  }, []);

  return (
    <div className='details'>
      <div className='details-resume d-flex'>
        <img
          src={`https://starwars-visualguide.com/assets/img/${nature}/${id}.jpg`}
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
        <>
          <div className="details-group">
            <p className='details-text'>
              <span className='details-propertie'>Name</span>
              {item?.properties?.name}
            </p>
          </div>
          <div className="details-group">
            <p className='details-text'>
              <span className='details-propertie'>Climate</span>
              {item?.properties?.climate}
            </p>
          </div>
          <div className="details-group">
            <p className='details-text'>
              <span className='details-propertie'>Population</span>
              {item?.properties?.population}
            </p>
          </div>
          <div className="details-group">
            <p className='details-text'>
              <span className='details-propertie'>Orbital Period</span>
              {item?.properties?.orbital_period}
            </p>
          </div>
          <div className="details-group">
            <p className='details-text'>
              <span className='details-propertie'>Rotation Period</span>
              {item?.properties?.rotation_period}
            </p>
          </div>
          <div className="details-group">
            <p className='details-text'>
              <span className='details-propertie'>Diameter</span>
              {item?.properties?.diameter}
            </p>
          </div>
        </>
      </div>
    </div>
  );
};
export default DetailsPlanets;