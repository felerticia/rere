import {ADD,SUB} from '../consts'

const initState = {
    result : 0
}

const primMathReducer = (state = initState, action) =>{
    switch (action.type){
        case ADD:
            state = {
                ...state,
                result: result+1
            }
            break;

        case SUB:
            state = {
                ...state,
                result: result-1
            }
            break;

        default:
            break;

    }
    return state;
}
export default primMathReducer