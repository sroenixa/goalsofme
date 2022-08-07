import { combineReducers } from 'redux'
import authReducer from './authReducer'
import goalReducer from './goalReducer'
import userReducer from './userReducer'

export default combineReducers({
   userStore: userReducer,
   tokenStore: authReducer,
   goalStore:goalReducer
})