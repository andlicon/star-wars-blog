const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      urlBase: '',
      favorites: [],
      characters: [],
      planets: []
    },
    actions: {
      exampleFunction: () => {

      },
    }
  };
};

export default getState;
