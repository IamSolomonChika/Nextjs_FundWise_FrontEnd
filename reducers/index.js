import { combineReducers } from "redux"; 
import users from './users'
import admins from './admins'
import accounts from './accounts'

export default combineReducers({ users, admins, accounts});