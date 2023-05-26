import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/details.css';

const Details = () => {
  // hooks
  const { nature, id } = useParams();
  const { store } = useContext(Context);
  const [item, setItem] = useState({});

  useEffect(() => {
    const item = store[nature == 'characters' ? 'people' : nature].find((element) => element.uid == id);

    setItem(item);
  }, []);

  const showDetailInfo = () => {
    let info = [];

    if (nature == 'characters')
      info = ['name', 'birth_year', 'gender', 'height', 'skin_color', 'eye_color'];
    else if (nature == 'planets')
      info = ['name', 'climate', 'population', 'orbital_period', 'rotation_period', 'diameter'];
    else if (nature == 'vehicles')
      info = ['name', 'model', 'vehicle_class', 'manufacturer', 'cost_in_credits', 'crew', 'passengers', 'max_atmosphering_speed', 'cargo_capacity'];

    let jsx = [];

    if (Object.keys(item).length != 0) {
      jsx = info.map((prop) => {
        return (
          <div key={`${prop}-${item._id}`} className='details-info'>
            <h3>{prop.replaceAll('_', ' ')}</h3>
            <p>{item.properties[prop]}</p>
          </div>
        )
      });
    }

    return jsx;
  };

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
        {
          showDetailInfo()
        }
      </div>
    </div>
  );
};
export default Details;