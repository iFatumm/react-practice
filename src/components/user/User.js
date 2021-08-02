import {getPosts} from "../../services/api";
import {useState} from "react";

export default function User({item: {id, name}}) {

    const [posts, setPosts] = useState([])

    return (
        <div>
            {name}
            <button onClick={()=> {
                getPosts(id).then(value => setPosts([...value.data]))
            }}>show posts</button>
            {posts.map(value => <div key={value.id}>{value.title}</div>)}
        </div>
    );
}