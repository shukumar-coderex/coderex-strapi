import axios from 'axios';

const app = axios.create( {
    baseURL: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
} );

export default app;
