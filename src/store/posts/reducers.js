import { actions } from './actions'

let { addPost, getPosts } = actions

const sData = JSON.parse(localStorage.getItem('test')) || { test: 'test' }

const initialState = {
  curId: '',
  curPost: '',
  allPosts: [],
}

export const postsReducer = (state = initialState, action) => {
  console.log('postsReducer -> action', action)
  switch (action.type) {
    case addPost.toString():
      console.log('!!!!!!!!! addPost')
      localStorage.setItem('test', JSON.stringify({ test: 'test' }))

      return {
        ...state,
        curId: action.payload.curId,
        curPost: action.payload.curPost,
        allPosts: action.payload.allPosts,
      }

    case getPosts.toString():
      console.log('!!!!!!!!! getPosts')
      localStorage.setItem('test', JSON.stringify({ test: 'test' }))

      return {
        ...state,
      }

    default:
      console.log('!!!!!!!!! ДЕФОЛТ')
      return state
  }
}
