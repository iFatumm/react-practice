import {Link, Route, Switch} from "react-router-dom";
import Posts from "./posts/Posts";

export default function App() {
    return (
        <div>
          <Link to={'/posts'}>post page</Link>
          <Switch>
            <Route path={'/posts'} component={Posts}/>
          </Switch>
        </div>
    );
}