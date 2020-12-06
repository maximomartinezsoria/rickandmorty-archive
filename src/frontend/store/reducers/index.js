import { combineReducers } from 'redux'
import characters from './charactersReducer'

const rootReducer = combineReducers({
  characters,
})

export default rootReducer
