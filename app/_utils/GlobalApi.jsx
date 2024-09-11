const { default: axios } = require("axios");


const axiosClient = axios.create({
     baseURL:'http://localhost:1337/api'
})

const getPosts = () => axiosClient.get('/posts');

export default {
    getPosts
}