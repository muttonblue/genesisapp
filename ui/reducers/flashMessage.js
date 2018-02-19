const initialState = { msg : '' , type: '' } 

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PAGES_REQUEST':
      return action.flashMessage
    case 'LOAD_PAGES_SUCCESS':
      return action.flashMessage
    case 'LOAD_PAGES_FAILURE':
      return action.flashMessage
    case 'CLOSE_ALERT':
      return action.flashMessage
    default:
      return state
  }
}