import {Link} from "react-router-dom";

export default function Comment({item}) {
    return (
        <div>
            {item.name}
            <button><Link to={'/comments/' + item.id}>body comment</Link></button>
        </div>
    );
}