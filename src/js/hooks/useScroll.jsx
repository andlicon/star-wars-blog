import { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';

const useScroll = (id, toQuery, endpoint) => {
  const { actions } = useContext(Context);

  useEffect(() => {
    const element = document.getElementById(id);
    element.addEventListener('scroll', ({ target }) => {
      if (target.offsetWidth + target.scrollLeft >= target.scrollWidth) {
        actions.getNewPage(toQuery, endpoint);
      }
    });
  }, []);

  return (
    { 'hola': 'hola' }
  );
};
export default useScroll;