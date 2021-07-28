import './Simpsons.css'
import Simpson from "../simpson/Simpson";

export default function Simpsons({items}) {
    return (
        <div className={'main'}>
            {
                items.map(value => <Simpson item={value}/>)

            }
        </div>
    );
}