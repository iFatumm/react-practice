import {useEffect, useState} from "react";
import {getPosts} from "../../services/api";
import Post from "../post/Post";
import {Route, Switch} from "react-router-dom";
import PostDetails from "../post.details/PostDetails";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        getPosts().then(value => setPosts([...value.data]))
    },[])

    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
        </div>
    );
}