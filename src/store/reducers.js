import { combineReducers } from 'redux'
import { postsReducer } from './posts/reducers'

export default combineReducers({
  posts: postsReducer,
})
