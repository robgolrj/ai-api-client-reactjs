import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/ai", // Replace with your API base URL
});

export default api;