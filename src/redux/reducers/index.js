import { combineReducers } from 'redux'
import toggleReducer from './toggleReducer'
import queryReducer from './queryReducer'

const rootReducer = combineReducers({
    toggleReducer,
    queryReducer
})

export default rootReducer