import axios from 'axios';

const api = axios.create({
    baseURL: "https://backend-aircnc-rs.herokuapp.com/",
});

export default api;