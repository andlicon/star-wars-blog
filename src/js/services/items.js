const urlBase = 'https://www.swapi.tech/api';

export const getItem = async ({ pageUrl }) => {
  try {
    const response = await fetch(pageUrl);
    const data = await response.json();
    if (response.ok) return data;
  }
  catch (error) {
    console.log(error);
  }
  return null;
};

export const getAllItem = async ({ urlList }) => {
  let promisesLists = [];

  urlList.forEach((url) => {
    const itemData = getItem({ pageUrl: url });
    promisesLists.push(itemData);
  });

  return Promise.all(promisesLists);
}