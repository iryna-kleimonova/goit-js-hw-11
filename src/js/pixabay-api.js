import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50372154-a6db83142fe95720537b26d91';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
