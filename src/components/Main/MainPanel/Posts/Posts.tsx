import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Post from './Post'
import st from './Posts.module.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getCurId, getCurPost, getAllPosts } from '../../../../store/posts/selectors'
import { actions } from '../../../../store/posts/actions'

let { addPost, getPosts } = actions

const Posts: React.FC = (props: any) => {
  console.log('Posts -> props', props)

  const [curId, setCurId] = useState('')
  const [curPost, setCurPost] = useState('')

  const submitHandler = (e: any) => {
    e.preventDefault()
    props.addPost({ curPost })
    console.log('отправлено', curPost)
    setCurPost('')
  }

  const postChangeHandler = (e: any) => {
    setCurPost(e.target.value)
    console.log('Пост изменен', e.target.value)
  }

  return (
    <>
      <div className={st.mainContainer}>
        Posts
        <form onSubmit={submitHandler}>
          <TextField value={curPost} onChange={postChangeHandler} />
          <Button
            variant="contained"
            color="secondary"
            disabled={Boolean(!curPost)}
            type="submit"
          >
            Запостить
          </Button>
          {props.allPosts.length ? (
            props.allPosts.map((item: any) => {
              return <Post key={item.curId} data={{ ...item, isEmpty: false }} />
            })
          ) : (
            <Post data={{ curId: '', curPost: '', isEmpty: true }} />
          )}
        </form>
      </div>
    </>
  )
}

export const mapStateToProps = (state: any) => {
  return {
    curId: getCurId(state),
    curPost: getCurPost(state),
    allPosts: getAllPosts(state),
  }
}

export const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: bindActionCreators(addPost, dispatch),
    getPosts: bindActionCreators(getPosts, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
