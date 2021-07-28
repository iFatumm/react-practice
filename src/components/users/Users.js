import User from "../user/User";

export default function Users({items, select}) {


    return (
        <div>
            {
                items.map(u=> <User key={u.id} item={u} select={select}/>)
            }
        </div>
    );
}