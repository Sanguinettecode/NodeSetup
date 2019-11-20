import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://www.googleapis.com/admin/reports/v1',
});

export default api;