
const initialState = {
    value: 0
}

export const counterReducer = (state = initialState, action)=>{
switch (action.type) {
    case 'INC': {
        return {...action, value:state.value + 1}
    }
    default:
        return state
}
}