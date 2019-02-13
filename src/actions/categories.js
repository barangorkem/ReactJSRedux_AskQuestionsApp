
import axios from 'axios';
import {url} from '../config/env';
import {getUserToken} from '../helpers/tokenAuthentication';
export const LIST_CATEGORY="LIST_CATEGORY";


export function listCategories()
{
    const headers = {
        'Authorization': 'Bearer '+getUserToken()
    };
    return dispatch=> {
        axios.get(`${url}/api/category/listcategory`,{headers:headers})
        .then(response=>response.data).then(response=>dispatch({
            type:LIST_CATEGORY,
            payload:response
        })).catch(error=>console.log(error));
    }
}