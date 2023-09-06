const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: 'https://www.swapi.tech/api',
      endpoints: ['people', 'planets', 'vehicles'],
      people: JSON.parse(localStorage.getItem('people')) || [],
      planets: JSON.parse(localStorage.getItem('planets')) || [],
      vehicles: JSON.parse(localStorage.getItem('vehicles')) || [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      peopleNext: JSON.parse(localStorage.getItem('peopleNext')) || null,
      planetsNext: JSON.parse(localStorage.getItem('planetsNext')) || null,
      vehiclesNext: JSON.parse(localStorage.getItem('vehiclesNext')) || null
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

              setStore({
                [endp + 'Next']: data.next
              });
              localStorage.setItem(endp + 'Next', JSON.stringify(store[endp + 'Next']));

              data.results.forEach(async (element) => {
                const url = element.url;

                const response = await fetch(url);
                const data = await response.json();

                setStore({
                  [endp]: [...getStore()[endp], data.result]
                });
                localStorage.setItem(endp, JSON.stringify(store[endp]));
              });
            }
            catch (error) {
              console.log(error);
            }
          }
        });
      },
      updateFavorite: (item) => {
        const store = getStore();
        const { favorites } = store;
        const actions = getActions();
        const { isFavorite } = actions;

        if (!isFavorite(item)) {
          //no es favorito, lo anade
          setStore({ favorites: [...favorites, item] });
          localStorage.setItem('favorites', JSON.stringify(getStore().favorites));
        }
        else {
          //es favorito, lo borra
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

        return favorites.some((fav) => fav._id == item._id);
      },
      getItem: (nature, id) => {
        const store = getStore();

        const obj = store[nature].find((element) => element.uid == id);

        return obj;
      },
      getNewPage: async (pageUrl, pageEnd) => {
        const store = getStore();

        if (pageUrl == null) return null

        const responsePage = await fetch(pageUrl);
        const dataPage = await responsePage.json();

        setStore({
          [pageEnd + 'Next']: dataPage.next
        });
        localStorage.setItem(pageEnd + 'Next', JSON.stringify(store[pageEnd + 'Next']));

        dataPage.results.forEach(async (element) => {
          const url = element.url;

          const itemResponse = await fetch(url);
          const itemData = await itemResponse.json();

          setStore({
            [pageEnd]: [...getStore()[pageEnd], itemData.result]
          });
          localStorage.setItem(pageEnd, JSON.stringify(store[pageEnd]));
        });
      }
    }
  };
};

export default getState;
