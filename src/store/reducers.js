import { combineReducers } from 'redux'
import { postsReducer } from './posts/reducers'

export default combineReducers({
  post: postsReducer,
})
