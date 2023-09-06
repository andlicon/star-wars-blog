import {
  getItem,
  getAllItem
} from '../services/items';

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
        const actions = getActions();
        const store = getStore();
        const { endpoints } = store;

        endpoints.forEach(async (endpoint) => {
          if (store[endpoint].length == 0) {
            const url = `${store.urlBase}/${endpoint}/`;

            actions.getNewPage({ pageUrl: url, endpoint });
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
      getNewPage: async ({ pageUrl, endpoint }) => {
        const store = getStore();
        const page = await getItem({ pageUrl });

        if (page == null) return null;

        const nextPage = page.next;
        const results = page.results;

        setStore({
          [endpoint + 'Next']: nextPage
        });
        localStorage.setItem(endpoint + 'Next', JSON.stringify(nextPage));

        const urlList = results.map(item => item.url);
        const allItem = await getAllItem({ urlList });
        const allResults = allItem.map(item => item.result)

        const newResultList = store[endpoint].concat(allResults);
        setStore({
          [endpoint]: newResultList
        });
        localStorage.setItem(endpoint, JSON.stringify(newResultList));

      }
    }
  };
};

export default getState;
