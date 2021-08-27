import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Posts from "./posts/Posts";

const SomeNestedChildComponent = () => {
    const counter = useSelector(({counterValue}) => counterValue)

    return (
        <header className="App-header">
            <h1>{counter}</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <Posts/>
        </header>
    )
}

const SomeChildComponent = () => {
    return (
        <SomeNestedChildComponent/>
    )
}

function App() {
    const dispatch = useDispatch();
    const [writeNumber, setWriteNumber] = useState(0)
    return (
        <div className="App">

            <button onClick={()=>{
                dispatch({type: 'INC'})
            }}>Добавити 1</button>

            <button onClick={()=>{
                dispatch({type: 'DEC'})
            }}>Забарати 2</button>

            <button onClick={()=>{
                dispatch({type: 'RESET'})
            }}>Очистити все</button>

            <input onChange={(e)=>setWriteNumber(+e.target.value)} type="number"/>

            <button onClick={()=>{
                dispatch({type: 'INPUT', payload: writeNumber})
            }}>Вставити значення</button>

            <SomeChildComponent/>

        </div>
    );
}

export default App;