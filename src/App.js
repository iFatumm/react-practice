import {useEffect, useState} from "react";
import {getComment, getComments} from "./services/api.services";
import Comments from "./compon/comments/Comments";
import CommentDetails from "./compon/comment.details/CommentDetails";

export default function App() {

  const [comments, setComments] = useState([]);
  const [commentDetails, setCommentDetails] = useState([null]);

  useEffect(()=> {
    getComments().then(response => {
        setComments(response.data)
    })
  },[]);

  function detailsComment(id) {
      getComment(id) .then(({data}) => setCommentDetails(data))
  }

    return (
        <div>
        <Comments items={comments} detailsComment={detailsComment}/>
            <hr/>
            <br/>
            {
                commentDetails && <CommentDetails details={commentDetails}/>
            }
        </div>
    );
}