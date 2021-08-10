import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})
const getPosts = ()=> axiosInstance('/posts');
const getPost = (id)=> axiosInstance('/posts/' + id);
const getComments = (id)=> axiosInstance('/posts/' + id + '/comments');
const getComment = (id)=> axiosInstance('/comments/' +id);

export {getPosts, getPost, getComments, getComment}