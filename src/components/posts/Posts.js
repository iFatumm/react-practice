import Post from "../post/Post";

export default function Posts({items, openDetails}) {
    return (
        <div>
            {items.map(p=> <Post key={p.id} item={p} openDetails={openDetails}/>)}
        </div>
    );
}