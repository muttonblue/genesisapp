const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PAGES_SUCCESS':
      return action.pages
    case 'CLEAR_PAGES':
      return action.pages
    default:
      return state
  }
}