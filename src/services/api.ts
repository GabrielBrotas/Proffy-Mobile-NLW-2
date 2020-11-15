import axios from 'axios';

const api = axios.create({
    // url pega do expo, alterado apenas o 'exp' para 'http' e a porta para a do servidor
    baseURL: "http://10.0.0.114:8080"
})

export default api