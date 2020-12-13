import axios from 'axios';
const instance = axios.create({
    baseURL: "https://yourbuca-backend.herokuapp.com/"
})
export default instance;