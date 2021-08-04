import {useEffect, useState} from "react";
import {getComments} from "../../services/api";
import Comment from "../comment/Comment";
import {Route, Switch} from "react-router-dom";
import CommentDetails from "../comment.details/CommentDetails";

export default function Comments(props) {
    console.log(props)
    const [comments, setComments] = useState([]);


        useEffect(()=>{
        getComments().then(value => setComments({...value.data}))

    },[])
    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}

            <Switch>
                <Route path={'/comments?postId=:id'} component={CommentDetails}/>
            </Switch>
        </div>
    );
}