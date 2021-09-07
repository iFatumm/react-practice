const initialState = {
    todos: [],
    todosLoading: false,
}

export const todosReducer = (state = initialState, action)=> {
    switch (action.type) {
        case 'ADD_TODOS': {
            return {...state, todos: action.payload}
        }
        case 'LOADING_TRUE': {
            return {...state, todosLoading: true}
        }
        case 'LOADING_FALSE': {
            return {...state, todosLoading: false}
        }
        case 'PUSH_TODO': {
            return {...state, todos: [...state.todos, action.payload]}
        }
        case 'DELETE_TODO': {
            const newArr = state.todos.filter((item)=> item.id !== action.payload)
            return {...state, todos: newArr}
        }
        default: return state
    }
}