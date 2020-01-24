import isLoggedRedcer from './IsLogged'
import stateChange from './StateChangeExample'
import { combineReducers } from 'redux'

const allReducers = combineReducers({ isLoggedRedcer, stateChange })

export default allReducers
