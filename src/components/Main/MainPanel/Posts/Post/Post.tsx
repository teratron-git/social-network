import { useState } from 'react';
import st from './Post.module.css'

interface IProps {
  data: {
    curId?: string,
    curPost?: string,
    isEmpty?: boolean,
  };
}

const Post = (props: IProps) => {
  console.log('Post -> props', props)

  return (
    <>
      {!props.data.isEmpty ? (
        <div className={st.mainContainer}>
          Id: {props.data.curId}
          Пост: {props.data.curPost}
        </div>
      ) : (
        <div className={st.mainContainer}>Пока сообщений нет...</div>
      )}
    </>
  )
}

export default Post
