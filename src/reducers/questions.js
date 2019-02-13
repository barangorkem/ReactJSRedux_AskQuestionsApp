import {NEW_QUESTION,NEW_QUESTION_ERROR} from '../actions/questions';

const initialState={
    
};

export default(state=initialState,action)=>
{
    debugger;
    switch(action.type)
    {
        case NEW_QUESTION:
        return({
            ...state
        })
        case NEW_QUESTION_ERROR:
        return({
            ...state
        })
        default:
            return state;
    }
}