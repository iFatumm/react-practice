import {Link, Route, Switch} from "react-router-dom";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post.details/PostDetails";
import Comments from "./components/comments/Comments";
import CommentDetails from "./components/comment.details/CommentDetails";

export default function App() {
    return (
        <div>
            <Link to={'/posts'}>posts page</Link>

            <Switch>
                <Route path={'/comments/:id'} component={CommentDetails}/>
                <Route path={'/posts/:id/comments'} component={Comments}/>
                <Route path={'/posts/:id'} component={PostDetails}/>
                <Route path={'/posts'} component={Posts}/>
            </Switch>
        </div>
    );
}