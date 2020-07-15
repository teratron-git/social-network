import { createAction } from 'redux-actions'
import * as constants from './constants'

export const actions = {
  addPost: createAction(constants.ADD_POST),
}
