import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

const getPosts = () => axiosInstance('/posts/');
const getPost = (id) => axiosInstance('/posts/' + id)

export {getPosts, getPost}