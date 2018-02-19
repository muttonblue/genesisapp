import {combineReducers } from 'redux'
import pages from './pages'
import flashMessage from './flashMessage'


export default combineReducers({
  pages, flashMessage
})