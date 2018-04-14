import fetch from 'isomorphic-fetch'
import { USERS_ENDPOINT } from '../constants/endpoints'

const getUserAC = (user) => ({
  type: 'GET_USERS',
  user
})

const findUserById = (id) => (
  fetch(`${USERS_ENDPOINT}?id=${id}`)
    .then((response) => response.json())
    .then(function (user) {
      return (user && user.length > 0) ? user[0] : { id: 0, name: 'no_name' };
    })
    .then((user) => getUserAC(user))
)

export {
  findUserById
}