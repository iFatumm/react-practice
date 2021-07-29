export default function Post({openDetails, item: {id, title}}) {
    return (
        <div>
            {id}. {title}
            <button onClick={()=> {
                openDetails(id)
            }
            }>OpenDetails</button>
        </div>
    );
}