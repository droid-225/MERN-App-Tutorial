import axios from "axios";

// in production, there is no localhost so we need to make base url dynamic
const BASE_URL = import.meta.evn.MODE === "development" ? "http://localhost:5001/api" : "/api"
const api = axios.create({
    baseURL: BASE_URL,
});

export default api;