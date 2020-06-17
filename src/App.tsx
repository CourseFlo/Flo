import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Brandon from './pages/Brandon';
import Sam from './pages/Sam';
import Browse from './pages/Browse';
import VisualCourse from './pages/VisualCourse';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Brandon} exact />
        <Route path="/Browse" component={Browse} />
        <Route path="/Sam" component={Sam} />
        <Route path="/VisualCourse" component={VisualCourse} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
