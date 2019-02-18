
import {LIST_CATEGORY} from '../actions/categories';

const initialState={
    categories:[],

};

export default(state=initialState,action)=>
{
    debugger

    switch(action.type)
    {
        
        case LIST_CATEGORY:
        return({
            ...state,
            categories:action.payload
        })
       
        default:
        return state;
    }
} 