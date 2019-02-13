
import axios from 'axios';
import {url} from '../config/env';
import {getUserToken} from '../helpers/tokenAuthentication';
export const NEW_QUESTION="NEW_QUESTION";
export const NEW_QUESTION_ERROR="NEW_QUESTION_ERROR";

export function insertQuestion({QuestionTitle,QuestionTime,CategoryId})
{
  debugger
    const headers = {
        'Authorization': 'Bearer '+getUserToken()
    };
    
    return dispatch=> {
        axios.post(`${url}/api/question/insert`,{QuestionTime,QuestionTitle,CategoryId},{headers:headers})
        .then(response=>console.log(response)).then(response=>dispatch({
            type:NEW_QUESTION,
            payload:response
        })).catch(error=>dispatch({
            type:NEW_QUESTION_ERROR,
            payload:error
        }))
    }
}