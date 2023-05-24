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
        const changeFavoriteStatus = getActions().changeFavoriteStatus;
        const favorites = getStore().favorites;

        changeFavoriteStatus(url, true);
        setStore({ favorites: [...favorites, { name, url }] })
      },
      deleteFavorite: (url) => {
        const changeFavoriteStatus = getActions().changeFavoriteStatus;
        const favorites = getStore().favorites;

        const newFavorites = favorites.filter((element) => {
          return (url != element.url);
        });
        //updatear el state de los resultados (isFavorte)
        changeFavoriteStatus(url, false);
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
      },
      changeFavoriteStatus: (url, newStatus) => {
        const group = url.split('/')[1];
        const itemsList = getStore()[group];
        const item = itemsList.find((element) => {
          return element.url.endsWith(url);
        });

        item.isFavorite = newStatus;

      },
    }
  };
};

export default getState;
