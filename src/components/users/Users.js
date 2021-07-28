import {useEffect, useState} from "react";

export default function Users() {

    const [usersList, setUsersList] = useState([]);
    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
                    .then(value => value.json())
                    .then(value => {
                        setUsersList(value);

                    });
    },[])

    return (
        <div>
            {
                usersList.map(value => <div key={value.id}>{value.id}. {value.name} - "{value.username}"</div>)
            }
        </div>
    );
}