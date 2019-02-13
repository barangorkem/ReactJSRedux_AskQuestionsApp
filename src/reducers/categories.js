
import {LIST_CATEGORY} from '../actions/categories';

const initialState={
    category:[]
};

export default(state=initialState,action)=>
{
    debugger

    switch(action.type)
    {
        
        case LIST_CATEGORY:
        return({
            ...state,
            category:action.payload
        })
        default:
        return state;
    }
} 