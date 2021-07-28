export default function User({select, item:{name, id}}) {
    return (
        <div>
            {id}. {name}
            <button onClick={()=>{
                select(id)
            }}>clickme</button>
        </div>
    );
}