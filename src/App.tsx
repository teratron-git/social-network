import React from 'react';
import st from './App.module.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={st.App}>
        <Header />
        <Switch>
          <Route path="/profile" component={Main} />
          <Route path="/messages" component={Main} />
          <Redirect from="/" to="/profile" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
