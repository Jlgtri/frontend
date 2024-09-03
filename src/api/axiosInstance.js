// src/api/axiosInstance.js

import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 30000,
    headers: { 'Content-Type': 'application/json' },
});

const callApi = async ({ method = 'GET', url, data }) => {
    try {
        const config = {
            method,
            url,
            data,
        };

        // Make the API call
        const response = await axiosInstance(config);

        // Return the response data
        return response.data;
    } catch (error) {
        // Handle errors
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('API Error:', error.response.data);
            throw new Error(error.response.data.message || 'An error occurred');
        } else if (error.request) {
            // Request was made but no response received
            console.error('No response received:', error.request);
            throw new Error('No response received from the server');
        } else {
            // Something happened in setting up the request
            console.error('Error setting up request:', error.message);
            throw new Error(error.message);
        }
    }
};

export default callApi;
