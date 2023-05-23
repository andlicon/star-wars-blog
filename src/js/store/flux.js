const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: 'https://www.swapi.tech/api',
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
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
      addFavorite: (name, group, id) => {
        const favorites = getStore().favorites;

        setStore({ favorites: [...favorites, { name, group, id }] })
      }
    }
  };
};

export default getState;
