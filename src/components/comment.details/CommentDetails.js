import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getComment} from "../../services/api";

export default function CommentDetails(props) {

    const {id} = useParams();
    const [comment, setComment] = useState({});

    useEffect(()=>{
        getComment(id).then(value => setComment({...value.data}))
    },[id])

    return (
        <div>
            {comment.body}<br/>
            "{comment.email}"
        </div>
    );
}