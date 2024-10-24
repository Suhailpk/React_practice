function useValueReducer(state, action){
    switch(action.type){
        case 'change-value':
            return {...state,
            value: state.value + action.payload}
        case 'change-color':
            return{
                ...state,
                value:state.color + action.payload
            }
        default:
            return state
    }
}


export default useValueReducer;