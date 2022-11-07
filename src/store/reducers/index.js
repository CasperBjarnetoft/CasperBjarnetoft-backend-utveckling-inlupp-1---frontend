import { combineReducers } from "redux";
import casesReducer from './casesReducer'
import caseReducer from './caseReducer'


export default combineReducers({
  cases: casesReducer,
  case: caseReducer,
})