import axios from 'axios';

const API_URL = 'https://swabhagya-realty-backend.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth APIs
export const signup = (userData) => api.post('/auth/signup', userData);
export const login = (userData) => api.post('/auth/login', userData);
export const getCurrentUser = () => api.get('/auth/me');

// Property APIs
export const getProperties = (filters) => api.get('/properties', { params: filters });
export const getPropertyBySlug = (slug) => api.get(`/properties/${slug}`);

// Enquiry APIs
export const submitEnquiry = (enquiryData) => api.post('/enquiries', enquiryData);
export const getUserEnquiries = (email) => api.get(`/enquiries?email=${email}`);
export const getAllEnquiries = () => api.get('/enquiries');

export default api;