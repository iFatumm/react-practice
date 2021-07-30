import Comment from "../comment/Comment";

export default function Comments({items, detailsComment}) {
    return (
        <div>
            {items.map(com => <Comment key={com.id} item={com} detailsComment={detailsComment}/>)}
        </div>
    );
}