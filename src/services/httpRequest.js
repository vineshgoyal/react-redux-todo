import axios from 'axios';

export const httpRequest = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});