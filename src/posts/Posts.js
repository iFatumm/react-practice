import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function Posts() {

    const posts = useSelector(({posts}) => posts);

    const dispatch = useDispatch();
    const fetchPosts = async ()=> {
        const data = await (await fetch ('https://jsonplaceholder.typicode.com/posts')).json()
        dispatch({
            type: 'SET_POSTS',
            payload: data,
        })
    }

    useEffect(()=> {
        fetchPosts()
    },[])


    return (
        <div>
            {/*{posts.map(post => (*/}
            {/*    <div key={post.id}>*/}
            {/*        <p><i>{post.title}</i></p>*/}
            {/*        <p><b>{post.body}</b></p>*/}
            {/*    </div>*/}
            {/*))}*/}
            Гімно стається
        </div>
    );
}