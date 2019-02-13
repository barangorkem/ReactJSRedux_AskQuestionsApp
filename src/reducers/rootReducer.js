
import {combineReducers} from 'redux';

import users from './users';
import questions from './questions';
import categories from './categories';
export default combineReducers({
    users,
    questions,
    categories
});