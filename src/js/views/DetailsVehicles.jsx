import React from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../hooks/useDetails.jsx';
import Loading from '../component/Loading.jsx';
import '../../styles/details.css';

const DetailsVehicles = () => {
  const { id } = useParams();
  const {
    item,
    nature,
    isLoading } = useDetails(id, 'vehicles');

  return (
    <>
      {
        isLoading
          ?
          <Loading />
          :
          <>
            <div className='details rounded p-2'>
              <div className='details-resume d-flex'>
                <object data={`https://starwars-visualguide.com/assets/img/${nature}/${id}.jpg`} className='details-image w-50 p-4' type="image/jpg">
                  <img className='card-img-top'
                    src='https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
                    alt={`${id} image`} />
                </object>
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
          </>
      }
    </>
  );
};
export default DetailsVehicles;