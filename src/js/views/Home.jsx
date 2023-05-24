import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/home.css';
// components
import CardGroup from '../component/CardGroup.jsx';

const Home = () => {
  const { store: { people, planets, vehicles } } = useContext(Context);

  return (
    <div className='container'>
      {/* characters */}
      <CardGroup title='Chracters' group='people' items={people} />
      {/* planets */}
      <CardGroup title='Planets' group='planets' items={planets} />
      {/* vehicles */}
      <CardGroup title='Vehicles' group='vehicles' items={vehicles} />
    </div>
  );
};
export default Home;