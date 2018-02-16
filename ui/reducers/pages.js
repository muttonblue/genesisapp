const initialState = []
export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PAGES':
      return action.pages
    case 'CLEAR_PAGES':
      return action.pages
    default:
      return state
  }
}