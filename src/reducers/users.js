

import {NEW_USER,NEW_USER_ERROR,LOGIN_USER,LOGIN_USER_ERROR,USER_CLAIMS,USER_LOGOUT} from '../actions/users';

const initialState={
    Succeeded:false,
    isLoginError:{},
    error:{},
    userData:{}
}

export default(state=initialState,action)=>{
    debugger
    switch(action.type)
    {
        case NEW_USER:
        return ({
            ...state,
            Succeeded:action.payload.Succeeded,
            error:action.payload.Errors
        })
        case NEW_USER_ERROR:
        return ({
            ...state,
            Succeeded:false,
            error:action.payload
        })
        case LOGIN_USER:
        return ({
            ...state,
        })
        case LOGIN_USER_ERROR:
        return ({
            ...state,
            isLoginError:action.payload
        })
        case USER_CLAIMS:
        return ({
            ...state,
            userData:action.payload
        })
        case USER_LOGOUT:
        return({
            ...state,
            userData:{}
        })
        default:
        return state;
    }
}