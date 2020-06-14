import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Brandon from './pages/Brandon';
// import Sam from './pages/Sam';
import Browse from './pages/Browse';
import Guanting from './pages/Guanting';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';

import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Brandon} exact />
        <Route path="/Browse" component={Browse} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route path="/Guanting" component={Guanting} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
