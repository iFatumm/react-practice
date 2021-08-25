import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const SomeNestedChildComponent = ()=>{
    const counter = useSelector(({counterValue})=> counterValue);
    const posts = useSelector(({posts}) => posts)



    return (
        <header className="App-header">
            <h1>{counter}</h1>
            <img src={logo} className="App-logo" alt="logo" />
            {posts.map(post => (
                <div key={post.id}>
                    <p><i>{post.title}</i></p>
                    <p><b>{post.body}</b></p>
                </div>
            ))}
        </header>
    )
}

const SomeChildComponent = () => {
    return (
       <SomeNestedChildComponent/>
    )
}

function App() {
    const [chooseNum, setChooseNum] = useState(0)
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
        <div className="App">

            <button onClick={()=>{
                dispatch({type: 'INC'})
            }}>Додати</button>

            <button onClick={()=>{
                dispatch({type: 'DEC'})
            }}>Відняти</button>

            <button onClick={()=> {
                dispatch({type: 'RESET'})
            }}>Очистити</button>

            <input onChange={(e)=>setChooseNum(+e.target.value)} type='number'/>

            <button onClick={()=>
                dispatch({type: 'CHOOSE_NUMBER', payload: chooseNum})
            }>Ввести Число</button>

            <button onClick={()=>{
                dispatch({type: 'ARIF', payload: 2})
            }}>Арифметична прогресія</button>

            <SomeChildComponent/>
        </div>
    );
}

export default App;
