import authentication from './authentication';
import note from './note'
import course from './course'
// Use combineReducers for multiple reducers
import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    note,
    course
})