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
      <CardGroup title='Characters' id='character-slide' keyToShow={['gender', 'hair_color', 'eye_color']} items={people} />
      {/* planets */}
      <CardGroup title='Planets' id='people-slide' keyToShow={['population', 'terrain']} items={planets} />
      {/* vehicles */}
      <CardGroup title='Vehicles' id='vehicle-slide' keyToShow={['crew', 'passengers', 'cargo_capacity', 'cost_in_credits']} items={vehicles} />
    </>
  );
};
export default Home;