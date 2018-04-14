import fetch from 'isomorphic-fetch'
import { USERS_ENDPOINT } from '../constants/endpoints'

const initi = (users) => ({
  type: 'INITI_USERS',
  users: users
})

const searchUsers = (users) => ({
    type: 'SEARCH_USERS',
    users: users
})

const loadUsers = () => (
  fetch(USERS_ENDPOINT)
  .then((response) => response.json())
  .then((users) => searchUsers(users))
)

export {
  initi, searchUsers
}