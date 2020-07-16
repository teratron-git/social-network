import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Post from './Post'
import st from './Posts.module.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getName, getPost } from '../../../../store/posts/selectors'
import { actions } from '../../../../store/posts/actions'

let { addPost } = actions
let postsDb: Object[] = []

const Posts: React.FC = (props: any) => {
  console.log('Posts -> props', props)

  const [name, setName] = useState('Иван')
  const [message, setMessage] = useState('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    props.addPost({ name, message })
    postsDb.push({ name, message })
    setMessage('')
    console.log('отправлено', message)
    console.log('postsDb', postsDb)
    // getFullState()
  }

  const postChangeHandler = (e: any) => {
    setMessage(e.target.value)
    console.log('Пост изменен', e.target.value)
  }

  return (
    <>
      <div className={st.mainContainer}>
        Posts
        <form onSubmit={submitHandler}>
          <TextField value={message} onChange={postChangeHandler} />
          <Button variant="contained" color="secondary" type="submit">
            Запостить
          </Button>
          {postsDb.map((item: any) => {
            return <Post key={item} data={item} />
          })}
        </form>
      </div>
    </>
  )
}

export const mapStateToProps = (state) => {
  return {
    name: getName(state),
    message: getPost(state),
    // getFullState: getState(state),
  }
}

export const mapDispatchToProps = (dispatch: any): any => {
  return {
    addPost: bindActionCreators(addPost, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
