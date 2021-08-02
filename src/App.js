import {Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/users/posts/Posts";

export default function App() {
    return (
        <Router>
            <div><button><Link to={'/users'}>users page</Link></button></div>
            <div><button><Link to={'/posts'}>posts page</Link></button></div>

            <Switch>
                <Route path={'/users'} render={() => {
                return <Users/>
                }}/>
                  <Route path={'/posts'} render={() => {
                    return <Posts/>
                }}/>
            </Switch>

        </Router>
    );
}