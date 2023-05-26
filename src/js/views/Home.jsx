import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/home.css';
// components
import CardGroup from '../component/CardGroup.jsx';

const Home = () => {
  const { store: { people, planets, vehicles } } = useContext(Context);

  return (
    <>
      {/* characters */}
      <CardGroup title='Characters' keyToShow={['gender', 'hair_color', 'eye_color']} items={people} />
      {/* planets */}
      <CardGroup title='Planets' keyToShow={['population', 'terrain']} items={planets} />
      {/* vehicles */}
      <CardGroup title='Vehicles' keyToShow={['crew', 'passengers', 'cargo_capacity', 'cost_in_credits']} items={vehicles} />
    </>
  );
};
export default Home;