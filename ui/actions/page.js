import fetch from 'isomorphic-fetch'
import { USERS_ENDPOINT } from '../constants/endpoints'

const receivePages = (pages) => ({
  type: 'RECEIVE_PAGES',
  pages
}) 

const loadPages = () => (
  fetch(USERS_ENDPOINT)
  .then((response) => response.json())
  .then((pages) => receivePages(pages))
)

const clearPages = () => ({
  type: 'CLEAR_PAGES',
  pages: []
})

export {
  loadPages,
  clearPages
}