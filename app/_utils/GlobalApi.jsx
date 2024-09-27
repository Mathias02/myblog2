const { default: axios } = require("axios");


const axiosClient = axios.create({
     baseURL:'http://localhost:1337/api'
})

const getPosts = () => axiosClient.get('/posts?populate=*').then((resp) => resp.data.data);
const postData = (data) => axiosClient.post('/posts',data);
const postId = (id) => axiosClient.get(`/posts?populate=*&[filters][id]=${id}`);
const addComments = (data) => axiosClient.post('/comments',data);
const getComments = (id) => axiosClient.get(`/posts?populate=*&[filters][id]=${id}&[populate=*][comments][populate=*][data]`).then((resp) => resp.data.data)

export default {
    getPosts,
    postData,
    postId, 
    addComments,
    getComments
}