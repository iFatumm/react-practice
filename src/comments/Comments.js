import {useEffect, useState} from "react";
import {getComments} from "../services/api";
import Comment from "../comment/Comment";

export default function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        getComments().then(value => setComments([...value.data]))
    },[])
    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    );
}