import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/details.css';

const Details = () => {
  const { nature, id } = useParams();
  const { store } = useContext(Context);
  const item = store[nature].find((element) => element.uid == id);
  const { properties } = item;

  const showDetailInfo = () => {
    let info = [];

    if (nature == 'people')
      info = ['name', 'birth_year', 'gender', 'height', 'skin_color', 'eye_color'];
    else if (nature == 'planets')
      info = ['name', 'climate', 'population', 'orbital_period', 'rotation_period', 'diameter'];
    else if (nature == 'vehicles')
      info = ['name', 'model', 'vehicle_class', 'manufacturer', 'cost_in_credits', 'crew', 'passengers', 'max_atmosphering_speed', 'cargo_capacity'];

    const jsx = info.map((prop) => {
      return (
        <div className='details-info'>
          <h3>{prop.replaceAll('_', ' ')}</h3>
          <p>{properties[prop]}</p>
        </div>
      )
    });

    return jsx;
  };

  return (
    <div className='details'>
      <div className='details-resume d-flex'>
        <img src='' alt='' className='details-image w-50 p-4' />
        <div className='details-resume-content w-50 p-4'>
          <h2 className='details-title'>{properties.name}</h2>
          <p className='details-resume-text'>
            {item.description}
          </p>
        </div>
      </div>
      <div className="details-content">
        {
          showDetailInfo()
        }
      </div>
    </div>
  );
};
export default Details;