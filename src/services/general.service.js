import axios from 'axios';

export const getInspirationCards = async (photosLimit = 10) => {
  const response = await axios.get(
    `http://jsonplaceholder.typicode.com/photos?_limit=${photosLimit}`,
  );

  return response.data;
};
