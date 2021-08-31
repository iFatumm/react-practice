const initialState = {
    todos: [],
    todosLoading: false
}
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODOS': {
            return {...state, todos: action.payload}
        }
        case 'LOADING_TRUE': {
            return {...state, todos: true}
        }
        case 'LOADING_FALSE': {
            return {...state, todos: false}
        }
        default:
            return state
    }
}