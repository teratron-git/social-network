import React, { useState } from 'react'
import st from './Post.module.css'

interface IProps {
  data: {
    name: string,
    message: string,
  };
}

const Post = (props: IProps) => {
  console.log('Post -> props', props)

  // const [name, setName] = useState('')
  // const [post, setPost] = useState('')

  return (
    <>
      <div className={st.mainContainer}>
        Имя: {props.data.name}
        Пост: {props.data.message}
      </div>
    </>
  )
}

export default Post
