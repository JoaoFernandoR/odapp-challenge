import axios from "axios";

const api = axios.create({
    baseURL: "https://odapp-challenge.herokuapp.com/api/v1/pacients",
});

export default api;
