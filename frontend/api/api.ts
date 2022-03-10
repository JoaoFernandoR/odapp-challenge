import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3222/api/v1/pacients",
});

export default api;

// change
