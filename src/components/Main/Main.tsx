import React from 'react';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';
import st from './Main.module.css';

export default function Main() {
  return (
    <div className={st.mainContainer}>
      <SidePanel />
      <MainPanel />
    </div>
  );
}
