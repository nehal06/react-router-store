import { combineReducers } from 'redux';

import login from "./login"
import employeReducer from './employee'
const rootReducer =  combineReducers({
  login,
  employeeData:employeReducer
})

export default  rootReducer;