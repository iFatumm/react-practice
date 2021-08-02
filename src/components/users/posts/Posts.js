import {useEffect, useState} from "react";
import {getAllPosts} from "../../../services/api";
import Post from "../../post/Post";

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        getAllPosts().then(value => setPosts(value.data))
    },[])

    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
        </div>
    );
}