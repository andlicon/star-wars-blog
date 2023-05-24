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
      },
      getProperties: async (url, toShow) => {
        let propertiesToShow = {};

        try {
          const response = await fetch(url);
          const data = await response.json();
          const fetchProperties = data.result.properties;

          toShow.forEach((element) => {
            propertiesToShow = {
              ...propertiesToShow,
              [element]: fetchProperties[element]
            }
          });
        }
        catch (error) {
          console.log(error);
        }

        return propertiesToShow;
      }
    }
  };
};

export default getState;
