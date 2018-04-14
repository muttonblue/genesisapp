const initialState = []
export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITI_USERS':
      return action.users
    case 'SEARCH_USERs':
      return action.users
    default:
      return state
  }
}