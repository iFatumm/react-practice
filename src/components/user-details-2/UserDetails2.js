import {useEffect, useState} from "react";

export default function UserDetails2({location: {state}}) {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({...state})
    }, [state])

    return (
        <div>
            {
                user.username
            }
        </div>
    );
}