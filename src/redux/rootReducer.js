import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import searchReducer from './searchbar/searchbarReducer'

const rootReducer = combineReducers({
    results: searchReducer,
})

export default rootReducer