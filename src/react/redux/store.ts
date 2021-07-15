import { combineReducers, createStore } from 'redux'
import { fetchDataReducer } from './fetchServerDataReducer'

const reducers = combineReducers({ serverData: fetchDataReducer })

export const store = createStore(reducers)
