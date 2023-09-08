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
      <section className='container rounded'>
        <h2 className='section__title'>Characters</h2>
        <div className='section__content'>
          <img className='rounded' src="https://publish.one37pm.net/wp-content/uploads/2022/02/underratedstarwarscharacters-twitter.jpg" alt="" />
          <p className='section__content-p'>Star Wars has more than 20.000 characters, let's discover them!</p>
        </div>
        <CardGroup
          title='Characters'
          id='character-slide'
          endpoint='people'
          keyToShow={['gender', 'hair_color', 'eye_color']}
          items={people} />
      </section>

      {/* planets */}
      <section className='container rounded'>
        <h2 className='section__title'>Planets</h2>
        <div className='section__content'>
          <img className='rounded' src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/The-Death-Star-in-Star-Wars.jpg" alt="" />
          <p className='section__content-p'>Star Wars has a vast list of planets, let's discover them!</p>
        </div>
        <CardGroup
          title='Planets'
          id='people-slide'
          endpoint='planets'
          keyToShow={['population', 'terrain']}
          items={planets} />
      </section>


      {/* vehicles */}
      <section className='container rounded'>
        <h2 className='section__title'>Vehicles</h2>
        <div className='section__content'>
          <img className='rounded' src="https://www.cnet.com/a/img/resize/8364177c9fdeddb3a35b8434a164b6f29619bd93/hub/2015/02/05/11b50968-7eef-47da-a344-33ebe0d18be0/star-wars-vehicles-at-at.jpg?auto=webp&width=1200" alt="" />
          <p className='section__content-p'>Lets discover all star wars vehicles</p>
        </div>
        <CardGroup
          title='Vehicles'
          id='vehicle-slide'
          endpoint='vehicles'
          keyToShow={['crew', 'passengers', 'cargo_capacity', 'cost_in_credits']}
          items={vehicles} />
      </section>
    </>
  );
};
export default Home;