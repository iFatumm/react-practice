import {useEffect, useState} from "react";

export default function Posts() {

    const [postsList, setPostsList] = useState([]);

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(value => {
                        console.log(value)
                            setPostsList(value)
                    });
    },[])

    return (
        <div>
            {
                postsList.map(value => <div key={value.id}>{value.id}. {value.title}</div>)
            }

        </div>
    );
}