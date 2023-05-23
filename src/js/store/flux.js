const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: 'https://www.swapi.tech/api',
      endpoints: ['people', 'planets', 'vehicles'],
      alert: null
    },
    actions: {
      allItems: () => {
        let store = getStore();

        store.endpoints.forEach(async (endp) => {
          const url = `${store.urlBase}/${endp}/`;

          try {
            const response = await fetch(url);
            const data = await response.json();

            setStore({
              [endp]: {
                results: data.results,
                next: data.next
              }
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
