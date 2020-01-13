import axios from 'axios';

const api = axios.create({ //Cria uma url base para o projeto...
    baseURL: 'https://api.github.com/'
})

export default api;