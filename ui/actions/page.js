import fetch from 'isomorphic-fetch'
import { USERS_ENDPOINT } from '../constants/endpoints'
  
const loadPages = () => {
  return (dispatch) => {
    dispatch({ 
      type: 'LOAD_PAGES_REQUEST',
      flashMessage : { msg : "loading..." , type: 'INFO' } })

    fetch(USERS_ENDPOINT)
      .then((response) => response.json())
      .then(
        (pages) => dispatch({ 
          type: 'LOAD_PAGES_SUCCESS',
          pages ,
          flashMessage : { msg : 'ทำการค้นหาเรียบร้อย' , type: 'ERROR' }
        }),
        (error) => dispatch({
          type: 'LOAD_PAGES_FAILURE',
          flashMessage : { msg : "ERROR" , type: 'ERROR' }
        })
      )
  }
}
 
const clearPages = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: 'CLOSE_ALERT', flashMessage : {msg : '' , type: '' } })
    dispatch({ type: 'CLEAR_PAGES',pages: []  })
  }
} 

export {
  loadPages,
  clearPages
}