import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPost} from "../services/api";

export default function PostDetails(props) {
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=> {
        getPost(id).then(value => setPost({...value.data}))
    },[id])
    return (
        <div>
            {post.body}
        </div>
    );
}