import React from 'react'
import st from './MainPanel.module.css'
import Posts from './Posts'

const MainPanel: React.FC = () => {
  return (
    <section id="content" className={st.mainContainer}>
      MAINPANEL
      <Posts />
    </section>
  )
}

export default MainPanel
