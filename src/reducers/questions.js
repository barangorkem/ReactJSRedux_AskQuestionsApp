import {NEW_QUESTION,NEW_QUESTION_ERROR,GET_QUESTIONS} from '../actions/questions';

const initialState={
    
    questionData:[]
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
        case GET_QUESTIONS:
        return({
            ...state,
            questionData:action.payload
        })
        default:
            return state;
    }
}