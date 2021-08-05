import {Link} from "react-router-dom";

export default function Comment({item}) {

    return (
        <div>
            {item.name} <Link to={'/comments/' + item.id}>body comment</Link>
        </div>
    );
}