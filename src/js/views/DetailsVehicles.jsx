import React from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../hooks/useDetails.jsx';
import '../../styles/details.css';

const DetailsVehicles = () => {
  const { id } = useParams();
  const {
    item,
    nature } = useDetails(id, 'vehicles');

  return (
    <div className='details'>
      <div className='details-resume d-flex'>
        <img
          src={`https://starwars-visualguide.com/assets/img/${nature}/${id}.jpg`}
          alt=''
          className='details-image w-50 p-4' />
        <div className='details-resume-content w-50 p-4'>
          <h2 className='details-title'>{item?.properties?.name}</h2>
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
          <div className='details-group'>
            <p className='details-text'>
              <span className='details-propertie'>Name</span>
              {item?.properties?.name}
            </p>
          </div>
          <div className='details-group'>
            <p className='details-text'>
              <span className='details-propertie'>Vehicle Class</span>
              {item?.properties?.vehicle_class}
            </p>
          </div>
          <div className='details-group'>
            <p className='details-text'>
              <span className='details-propertie'>Length</span>
              {item?.properties?.length}
            </p>
          </div>
          <div className='details-group'>
            <p className='details-text'>
              <span className='details-propertie'>Crew</span>
              {item?.properties?.crew}
            </p>
          </div>
          <div className='details-group'>
            <p className='details-text'>
              <span className='details-propertie'>Passengers</span>
              {item?.properties?.passengers}
            </p>
          </div>
          <div className='details-group'>
            <p className='details-text'>
              <span className='details-propertie'>Cost</span>
              {item?.properties?.cost_in_credits}
            </p>
          </div>
        </>
      </div>
    </div>
  );
};
export default DetailsVehicles;