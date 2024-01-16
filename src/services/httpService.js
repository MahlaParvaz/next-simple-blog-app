import axios from 'axios';

// console.log(process.env.BASE_API_URL);
const app = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default http;
