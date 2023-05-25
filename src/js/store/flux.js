const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: 'https://www.swapi.tech/api',
      endpoints: ['people', 'planets', 'vehicles'],
      people: localStorage.people == undefined ? [] : JSON.parse(localStorage.people),
      planets: localStorage.planets == undefined ? [] : JSON.parse(localStorage.planets),
      vehicles: localStorage.vehicles == undefined ? [] : JSON.parse(localStorage.vehicles),
      favorites: []
    },
    actions: {
      getAllItems: () => {
        const store = getStore();
        const { endpoints } = store;

        endpoints.forEach(async (endp) => {
          if (store[endp].length == 0) {
            const url = `${store.urlBase}/${endp}/`;

            try {
              const response = await fetch(url);
              const data = await response.json();

              data.results.forEach(async (element) => {
                const url = element.url;

                const response = await fetch(url);
                const data = await response.json();

                setStore({
                  [endp]: [...getStore()[endp], data.result]
                });
                window.localStorage.setItem(endp, JSON.stringify(store[endp]));
              });
            }
            catch (error) {
              console.log(error);
            }
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
