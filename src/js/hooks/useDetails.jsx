import { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';

const useDetails = (id, nature) => {
  const { actions } = useContext(Context);
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const item = actions.getItem(nature, id);
    document.title = item?.properties?.name
    setItem(item);
    setIsLoading(false);
  }, []);

  return ({
    item,
    nature,
    isLoading
  });
};
export default useDetails;