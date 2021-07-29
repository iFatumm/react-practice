import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/api.posts";
import Details from "./components/details.post/Details";
import Posts from "./components/posts/Posts";

export default function App() {
    
    const [posts, setPosts] = useState([]);
    const [detailsPost, setDetailsPost] = useState([null]);

    useEffect(()=> {
        getPosts().then(response => {
            setPosts(response.data)
        })
    },[])

    function openDetails(id) {
        getPost(id).then(({data}) => setDetailsPost(data))
        }


    return (
        <div>
        <Posts items={posts} openDetails={openDetails}/>
            <hr/>
            <br/>
            {
                detailsPost && <Details details={detailsPost}/>
            }
        </div>
    );
}