import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import '../../styles/home.css';
// components
import CardGroup from '../component/CardGroup.jsx';

const Home = () => {
  const { store: { people, peopleNext, planets, planetsNext, vehicles, vehiclesNext } } = useContext(Context);

  return (
    <>
      {/* characters */}
      <CardGroup
        title='Characters'
        id='character-slide'
        endpoint='people'
        keyToShow={['gender', 'hair_color', 'eye_color']}
        items={people}
        toQuery={peopleNext} />
      {/* planets */}
      <CardGroup
        title='Planets'
        id='people-slide'
        endpoint='planets'
        keyToShow={['population', 'terrain']}
        items={planets}
        toQuery={planetsNext} />
      {/* vehicles */}
      <CardGroup
        title='Vehicles'
        id='vehicle-slide'
        endpoint='vehicles'
        keyToShow={['crew', 'passengers', 'cargo_capacity', 'cost_in_credits']}
        items={vehicles}
        toQuery={vehiclesNext} />
    </>
  );
};
export default Home;