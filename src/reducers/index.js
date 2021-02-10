import { combineReducers } from 'redux';
import workorders from './workorders';
import filter from './filter';
import siteGroup from './siteGroup';

export default combineReducers({ workorders, filter, siteGroup });
