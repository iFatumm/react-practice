export default function Comments({item}) {
    console.log({item})
    return (
        <div>
            {item.body}
        </div>
    );
}