import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID 8a35c2708bbb458d5959bc641c0faf03acc519a545c59f9a613c10c97777a9e8'
    }
});