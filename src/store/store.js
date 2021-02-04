import {combineReducers, createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import {matematika} from '../reducers/matematika'
import {reducerAPI} from '../reducers/reducerapi'
import {users} from '../reducers/users'

export const store = createStore(combineReducers({
    users,
    matematika,
    reducerAPI
  }),{},applyMiddleware(logger))