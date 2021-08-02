import {useState} from "react";
import {getComments} from "../../services/api";
import Comments from "../comments/Comments";

export default function Post({item}) {

    const [comments, setComments] = useState([]);

    const details = (id)=> {
        getComments(id).then(value => setComments(value.data))
    }

    return (
        <div>
            {item.title}
            <button onClick={()=> details(item.id)}>show details</button>
            {comments.map(value => <Comments key={value.id} item={value}/>)}
        </div>
    );
}