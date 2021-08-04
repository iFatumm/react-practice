import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getComment} from "../../services/api";

export default function CommentDetails(props) {
    const {match: {params: {postId}}} = props;
    console.log(postId)

    const [comment, setComment] = useState({});
    const {id} = useParams();

    useEffect(()=> {
        getComment(id).then(value => setComment({...value.data}))
    },[id])

    return (
        <div>
            {comment.body}
        </div>
    );
}