import axios from 'axios';

// Create an instance of axios with default configurations
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust base URL as needed
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
