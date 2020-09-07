import { actions } from './actions'

let { addPost, getPosts } = actions

const sData = JSON.parse(localStorage.getItem('test')) || { test: 'test' }
const tempArr = []

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
      console.log('!!!!!!!!! action', action)

      localStorage.setItem('test', JSON.stringify({ test: 'test' }))
      const id = new Date().getTime().toString()
      tempArr.push({
        curId: id,
        curPost: action.payload.curPost,
      })
      console.log('postsReducer -> tempArr', tempArr)
      return {
        ...state,
        curId: id,
        curPost: action.payload.curPost,
        allPosts: tempArr,
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
