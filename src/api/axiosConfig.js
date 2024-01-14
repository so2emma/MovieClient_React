import axios from "axios";

export default axios.get({
    baseURL: 'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});