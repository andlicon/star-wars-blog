import { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const useScroll = (id, endpoint) => {
  const { actions, store } = useContext(Context);

  const getToQuery = () => {
    return store[endpoint + 'Next'];
  }

  useEffect(() => {
    const element = document.getElementById(id);
    element.addEventListener('scroll', ({ target }) => {
      if (target.offsetWidth + target.scrollLeft >= target.scrollWidth) {
        actions.getNewPage({ pageUrl: getToQuery(), endpoint });
      }
    });
  }, []);

  return (
    { 'hola': 'hola' }
  );
};
export default useScroll;