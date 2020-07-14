import React from 'react'
import st from './SidePanel.module.css'
import { NavLink } from 'react-router-dom'

const SidePanel: React.FC = () => {
  return (
    <nav className={st.mainContainer}>
      <div className={st.item}>
        <NavLink to="/profile" activeClassName={st.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/messages" activeClassName={st.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/news" activeClassName={st.activeLink}>
          News
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/music" activeClassName={st.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={st.item}>
        <NavLink to="/settings" activeClassName={st.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default SidePanel
