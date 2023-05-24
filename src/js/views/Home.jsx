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
      <CardGroup title='Chracters' toShow={['gender', 'hair_color', 'eye_color']} items={people} />
      {/* planets */}
      <CardGroup title='Planets' toShow={['population', 'terrain']} items={planets} />
      {/* vehicles */}
      <CardGroup title='Vehicles' toShow={['crew', 'passengers', 'cargo_capacity', 'cost_in_credits']} items={vehicles} />
    </div>
  );
};
export default Home;