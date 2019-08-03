import { createStore, applyMiddleware, compose } from 'redux'
import myReducer from './reducers'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middleWare = [thunk, sagaMiddleware]
  const store = createStore(myReducer, compose(applyMiddleware(...middleWare)))

  sagaMiddleware.run(saga)
  return store
}