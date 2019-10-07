import { createStore, combineReducers, applyMiddleware } from 'redux';
import textReducer from './reducers/text';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  textReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;