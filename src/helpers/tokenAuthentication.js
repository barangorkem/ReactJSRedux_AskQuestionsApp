

export const isUserLogin=()=>{
    if(localStorage.getItem("userToken")!=null)
    {
        return true;
    }
    else
    {
        return false;
    }
}
export const getUserToken=()=>{
    return localStorage.getItem("userToken");
}