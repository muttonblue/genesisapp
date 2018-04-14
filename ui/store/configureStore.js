import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)

const promise = (store) => {
  const next = store.dispatch
  return (action) => {
    if (typeof action.then === 'function')
      return action.then(next)
    return next(action)
  }
} 

export default () => {
  const middlewares = [thunk]
  const store = createStore(rootReducer, applyMiddleware(...middlewares) )
  // store.dispatch = promise(store)

  if (module.hot) {
    System.import('../reducers').then(nextRootReducer =>
      store.replaceReducer(nextRootReducer.default)
    )
  }

  return store
}