
import {logout} from '../actions/users';

export const isUserLogin=()=>{
    
    if(localStorage.getItem("userToken")!=null )
    {
        debugger
        if(localStorage.getItem("userExpires")>Date.now())
        {
            return true;
        }
       else
       {
            logout();
            return false;
       }
        
    }
    else
    {
        return false;
    }
}
export const getUserToken=()=>{
    return localStorage.getItem("userToken");
}