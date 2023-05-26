const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: 'https://www.swapi.tech/api',
      endpoints: ['people', 'planets', 'vehicles'],
      people: localStorage.people == undefined ? [] : JSON.parse(localStorage.people),
      planets: localStorage.planets == undefined ? [] : JSON.parse(localStorage.planets),
      vehicles: localStorage.vehicles == undefined ? [] : JSON.parse(localStorage.vehicles),
      favorites: localStorage.favorites == undefined ? [] : JSON.parse(localStorage.favorites),
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
      addFavorite: (item) => {
        const store = getStore();
        const { favorites } = store;
        const actions = getActions();
        const { isFavorite, deleteFavorite } = actions;

        if (!isFavorite(item)) {
          setStore({ favorites: [...favorites, item] });
          localStorage.setItem('favorites', JSON.stringify(getStore().favorites));
        }
        else {
          deleteFavorite(item);
        }
      },
      deleteFavorite: (item) => {
        const store = getStore();
        const { favorites } = store;
        const actions = getActions();
        const { isFavorite } = actions;

        if (isFavorite(item)) {
          const newFavorites = favorites.filter((element) => {
            return (element._id != item._id);
          });

          setStore({ favorites: newFavorites });
          localStorage.setItem('favorites', JSON.stringify(getStore().favorites));
        }
      },
      isFavorite: (item) => {
        const store = getStore();
        const { favorites } = store;

        return favorites.some(element => element._id == item._id);
      },
    }
  };
};

export default getState;
