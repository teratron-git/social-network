import { FC } from 'react';
import st from './MainPanel.module.css'
import Posts from './Posts'

const MainPanel: FC = () => {
  return (
    <section id="content" className={st.mainContainer}>
      MAINPANEL
      <Posts />
    </section>
  )
}

export default MainPanel
