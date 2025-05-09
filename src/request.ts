const THE_CAT_API = 'https://api.thecatapi.com/v1/images/search';

export const getCatImageUrl = () =>
  fetch(THE_CAT_API)
    .then((response) => response.json())
    .then((data) => data[0].url)
    .catch(() => alert('Что-то пошло не так'));
