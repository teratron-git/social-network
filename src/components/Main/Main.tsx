import { FC } from 'react';
import SidePanel from './SidePanel'
import MainPanel from './MainPanel'
import st from './Main.module.css'

const Main: FC = () => {
  return (
    <div className={st.mainContainer}>
      <SidePanel />
      <MainPanel />
    </div>
  )
}

export default Main
