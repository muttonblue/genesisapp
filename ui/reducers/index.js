import {combineReducers } from 'redux'
import pages from './pages'
import flashMessage from './flashMessage'
import users from './users'

export default combineReducers({
  pages, flashMessage, users
})