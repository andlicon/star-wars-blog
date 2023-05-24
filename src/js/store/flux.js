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

            const dataWithFavorite = data.results.map((element) => {
              return { ...element, isFavorite: false }
            });

            setStore({
              [endp]: dataWithFavorite
            });
          }
          catch (error) {
            console.log(error);
          }
        });
      },
      addFavorite: (name, url) => {
        const favorites = getStore().favorites;

        setStore({ favorites: [...favorites, { name, url }] })
      },
      deleteFavorite: (name, url) => {
        const favorites = getStore().favorites;
        const newFavorites = favorites.filter((element) => {
          return (element.name != name, url != element.url);
        });

        setStore({ favorites: newFavorites });
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
