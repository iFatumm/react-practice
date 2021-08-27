import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

const initialState = {
    counterValue: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, counterValue: state.counterValue + 1}
        }
        case 'DEC': {
            return {...state, counterValue: state.counterValue - 2}
        }
        case 'RESET': {
            return {...state, counterValue: 0}
        }
        case 'INPUT': {
            return {...state, counterValue: state.counterValue + action.payload}
        }
        case 'SET_POSTS': {
            return {...state, posts: action.payload}
        }
        default:
            return state
    }
}

const store = createStore(counterReducer)

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();