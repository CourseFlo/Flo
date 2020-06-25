import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Browse from './pages/Browse';
import VisualCourse from './pages/VisualCourse';
import TempNavbar from './components/TempNavbar';
import ErrorPage from './components/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <main>
      <TempNavbar />
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/Browse" component={Browse} />
        <Route path="/VisualCourse" component={VisualCourse} />
        <Route path="/ProfilePage" component={ProfilePage} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;