import axios from "axios";

export default axios.create({
    baseURL: 'http://13.124.210.86:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
    }
});