import {Link, Route, Switch} from "react-router-dom";
import Posts from "./comment/posts/Posts";


export default function App() {
    return (
        <div>
        <Link to={'/posts'}>posts page</Link>

          <Switch>
            <Route path={'/posts'} component={Posts}/>
          </Switch>
        </div>
    );
}