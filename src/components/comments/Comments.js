import {useEffect, useState} from "react";
import {getComments} from "../../services/api";
import Comment from "../comment/Comment";
import {Route, Switch, useParams} from "react-router-dom";
import CommentDetails from "../comment.details/CommentDetails";

export default function Comments() {
    const {id} = useParams()
    const [comments, setComments] = useState([]);
    console.log(comments)

    useEffect(() => {
        getComments(id)
            .then(value => setComments([...value.data]))

    }, [id])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}

        </div>
    );
}