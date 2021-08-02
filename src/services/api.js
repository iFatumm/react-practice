import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

const getUsers = () => axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/' + id);
const getAllPosts = () => axiosInstance('/posts');
const getPosts = (id) => axiosInstance('/users/' + id + '/posts');
const getComments = (id) => axiosInstance('/posts/' + id / '/comments');

export {getUsers, getUser, getPosts, getAllPosts, getComments}
