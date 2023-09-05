import { useEffect, useState } from 'react';

const useScroll = (id) => {
  useEffect(() => {
    const element = document.getElementById(id);
    element.addEventListener('scroll', ({ target }) => {
      if (target.offsetWidth + target.scrollLeft >= target.scrollWidth) {
        console.log('listo');
      }
    });
  }, []);

  return (
    { 'hola': 'hola' }
  );
};
export default useScroll;