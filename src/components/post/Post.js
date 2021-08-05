import {Link, Route, Switch} from "react-router-dom";
import Comments from "../comments/Comments";

export default function Post({item}) {
    return (
        <div>
            {item.title} <button><Link to={'/posts/' + item.id}>details</Link></button>

        </div>
    );
}