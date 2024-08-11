import axios from 'axios';

const api = axios.create({
  baseURL: 'https://suitmedia-backend.suitdev.com/api',
});

export const getIdeas = async (page, pageSize, sort) => {
  try {
    const response = await api.get('/ideas', {
      params: {
        'page[number]': page,
        'page[size]': pageSize,
        'append[]': ['small_image', 'medium_image'],
        sort,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching ideas:', error);
    throw error;
  }
};
