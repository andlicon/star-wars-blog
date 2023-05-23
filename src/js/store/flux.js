const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: 'https://www.swapi.tech/api',
      people: [],
      planets: [],
      vehicles: [],
      favorites: null
    },
    actions: {
      getAllItems: () => {
        let store = getStore();
        const endpoints = ['people', 'planets', 'vehicles'];

        endpoints.forEach(async (endp) => {
          const url = `${store.urlBase}/${endp}/`;

          try {
            const response = await fetch(url);
            const data = await response.json();

            setStore({
              [endp]: data.results
            });
          }
          catch (error) {
            console.log(error);
          }
        });
      },
    }
  };
};

export default getState;
