import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import '../../styles/home.css';
// components
import CardGroup from '../component/CardGroup.jsx';
import Banner from '../component/Banner.jsx';

const Home = () => {
  const { store: { people, planets, vehicles } } = useContext(Context);

  useEffect(() => {
    document.title = 'Fetching SWAPI'
  }, []);

  return (
    <>
      <Banner />
      {/* characters */}
      <CardGroup
        title='Characters'
        id='character-slide'
        endpoint='people'
        keyToShow={['gender', 'hair_color', 'eye_color']}
        items={people} />
      Discover new worlds!
      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7k2R_AHR6jH7SgCIThDok8Q1mgoTnVZkoQA&usqp=CAU */}
      {/* planets */}
      <CardGroup
        title='Planets'
        id='people-slide'
        endpoint='planets'
        keyToShow={['population', 'terrain']}
        items={planets} />
      {/* vehicles */}
      <CardGroup
        title='Vehicles'
        id='vehicle-slide'
        endpoint='vehicles'
        keyToShow={['crew', 'passengers', 'cargo_capacity', 'cost_in_credits']}
        items={vehicles} />
    </>
  );
};
export default Home;