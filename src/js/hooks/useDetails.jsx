import { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';

const useDetails = (id, nature) => {
  const { actions } = useContext(Context);
  const [item, setItem] = useState({});

  useEffect(() => {
    const item = actions.getItem(nature, id);

    setItem(item);
  }, []);

  return ({
    item,
    nature
  });
};
export default useDetails;