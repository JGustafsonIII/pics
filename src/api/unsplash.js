import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wJFNVvQAT5iaYf3tqPr81wk6sSg2TqrXBd6oC39Xr74',
  },
});
