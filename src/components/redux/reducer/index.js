import { combineReducers } from 'redux';
import userdetails from './userReducer';

export default combineReducers({
    userdetails: userdetails
});