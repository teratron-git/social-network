import { actions } from './actions'

let { addPost } = actions

const sData = JSON.parse(localStorage.getItem('test')) || { test: 'test' }

const initialState = {
  name: 'Сергей',
  message: 'Тестовое сообщение',
}

export const postsReducer = (state = initialState, action) => {
  console.log('postsReducer -> action', action)
  switch (action.type) {
    case addPost.toString():
      console.log('!!!!!!!!! addPost')
      localStorage.setItem('test', JSON.stringify({ test: 'test' }))

      return {
        ...state,
        name: action.payload.name,
        message: action.payload.message,
      }

    default:
      console.log('!!!!!!!!! ДЕФОЛТ')
      return state
  }
}
