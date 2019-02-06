

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