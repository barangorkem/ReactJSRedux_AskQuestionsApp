
import axios from 'axios';
import { url } from '../config/env';
export const LIST_CATEGORY = "LIST_CATEGORY";

export function listCategories() {
    return dispatch => {
        axios.get(`${url}/api/category/listcategory`)
            .then(response => response.data).then(response => dispatch({
                type: LIST_CATEGORY,
                payload: response
            })).catch(error => console.log(error));
    }
}
