import {Link} from "react-router-dom";


export default function User({item}) {
    return (
        <div>
            {item.name} - <Link to={'/users/'+ item.id}>details</Link>
            {/*	{item.name} - <Link to={{pathname: '/users/' + item.id, state: item}}>details</Link>*/}
        </div>
    );
}