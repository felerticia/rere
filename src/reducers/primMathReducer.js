import {ADD,SUB} from '../actions/consts'

const initState = {
    result : 0
}

const primMathReducer = (state = initState, action) =>{
    switch (action.type){
        case ADD:
            state = {
                ...state
            }
            break;

        case SUB:
            state = {
                ...state
            }
            break;

        default:
            break;

    }
    return state;
}
export default primMathReducer