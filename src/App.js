import {useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INC_A':
            return {...state, a: state.a + action.payload}
        case 'INC_B':
            return {...state, b: state.b + action.payload}
        default: return {...state}
    }
}

export default function App() {

    const [{a, b}, dispatch] = useReducer(reducer, {a: 0, b: 0})

    return (
        <div>
            <button onClick={() => dispatch({type: 'INC_A', payload: 1})}>click me A {a}</button>
            <button onClick={() => dispatch({type: 'INC_B', payload: 2})}>click me B {b}</button>
        </div>
    );
}