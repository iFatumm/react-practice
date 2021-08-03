import {Route, Link, Switch} from "react-router-dom";
import Users from "./components/users/Users";

export default function App() {
    return (
        <div>
            <div><Link to={'/users'}>users page</Link></div>
            <Switch>
                <Route path={'/users'} component={Users}/>
            </Switch>
        </div>

    );
}