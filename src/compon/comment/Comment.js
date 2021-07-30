export default function Comment({detailsComment, item: {id, name, email}}) {
    return (
        <div>
            "{name}" - ({email})<br/><br/>
            <button onClick={()=> {
            detailsComment(id)
            }
            }>comments details</button>
        </div>
    );
}