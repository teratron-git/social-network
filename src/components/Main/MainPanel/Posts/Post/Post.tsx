import React, { useState } from 'react'
import st from './Post.module.css'

interface IProps {
  data: {
    curId: string,
    curPost: string,
  };
}

const Post = (props: IProps) => {
  console.log('Post -> props', props)

  // const [name, setName] = useState('')
  // const [post, setPost] = useState('')

  return (
    <>
      <div className={st.mainContainer}>
        Имя: {props.data.curId}
        Пост: {props.data.curPost}
      </div>
    </>
  )
}

export default Post
