import { combineReducers } from 'redux';
import workorders from './workorders';
import filter from './filter';

export default combineReducers({ workorders, filter });
