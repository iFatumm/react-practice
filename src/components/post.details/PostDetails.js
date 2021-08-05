import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getPost} from "../../services/api";

export default function PostDetails(props) {

    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getPost(id).then(value => setPost({...value.data}))
    },[id])

    return (
        <div>
            {post.body}
            <button><Link to={'/posts/' + id + '/comments'}>comments details</Link></button>


        </div>

    );
}