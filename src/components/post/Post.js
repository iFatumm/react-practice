import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div>
            {item.title}
            <button><Link to={'/posts/' + item.id}>posts details</Link></button>
        </div>
    );
}