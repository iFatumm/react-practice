import {combineReducers} from "redux";
import {counterReducer} from "./counter";
import {todosReducer} from "./todos";

export const rootReducers = combineReducers({
    todosReducer,
    counterReducer
})