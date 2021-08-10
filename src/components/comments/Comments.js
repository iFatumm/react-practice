import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getComments} from "../../services/api";
import Comment from "../comment/Comment";

export default function Comments(props) {

    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getComments(id).then(value => setComments([...value.data]))
    },[id])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    );
}