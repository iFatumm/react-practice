import {useEffect, useState} from "react";
import {getUser} from "../../sevices/api";
import {useParams} from "react-router-dom";

export default function UserDetails(props) {

    const [user, setUser] = useState({});
    const {id} = useParams()

    useEffect(()=> {
        getUser(id).then(value => setUser({...value.data}))
    },[id])
    return (
        <div>
            {user.id}. {user.username}
        </div>
    );
}