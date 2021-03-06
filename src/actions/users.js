
import axios from 'axios';
import {url} from '../config/env';
import {getUserToken} from '../helpers/tokenAuthentication';
export const NEW_USER="NEW_USER";
export const NEW_USER_ERROR="NEW_USER_ERROR";
export const LOGIN_USER="LOGIN_USER";
export const LOGIN_USER_ERROR="LOGIN_USER_ERROR";
export const USER_CLAIMS="USER_CLAIMS";
export const USER_LOGOUT="USER_LOGOUT";
export function onNewUserSubmit({firstname,lastname,username,email,password})
{
    return dispatch=> {
        axios.post(`${url}/api/user/register`,{firstname,lastname,username,email,password})
        .then(response =>response.data).then(response=>dispatch({
            type:NEW_USER,
            payload:response
        })).catch(error=>dispatch({
            type:NEW_USER_ERROR,
            payload:error
        }))
    }
}
export function onUserLoginSubmit({username,password})
{

    debugger
    console.log(username,password);
    const data = "username=" + username + "&password=" + password + "&grant_type=password";
    return dispatch=>{
        axios.post(`${url}/token`, data).then(response=>response.data).then(data=>{
            console.log(data[".expires"]);
            localStorage.setItem('userToken',data.access_token);
            localStorage.setItem('userRole',data.role);
            localStorage.setItem('userExpires',data[".expires"]);

    }).then(response=>{
            dispatch({
                type:LOGIN_USER,
                payload:response
            })

        }).catch(error=>dispatch({
            type:LOGIN_USER_ERROR,
            payload:error.response
        }));

    }
}
export function getUserClaims()
{
    debugger
    const headers = {
        'Authorization': 'Bearer '+getUserToken()
    }
    return dispatch=> {
        axios.get(`${url}/api/user/GetUserClaims`,{headers:headers})
        .then(response=>
            dispatch({
            type:USER_CLAIMS,
            payload:response.data
        }));
    }
}

export function logout()
{
    debugger
    
        localStorage.removeItem('userToken');
        localStorage.removeItem('userRole');
        localStorage.removeItem('userExpires');

        return { type: USER_LOGOUT }

}