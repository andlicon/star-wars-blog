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
      <CardGroup title='Chracters' items={people} />
      {/* planets */}
      <CardGroup title='Planets' items={planets} />
      {/* vehicles */}
      <CardGroup title='Vehicles' items={vehicles} />
    </div>
  );
};
export default Home;