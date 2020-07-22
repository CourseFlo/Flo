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
import Home from './pages/Home';

import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <main>
      <TempNavbar />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/Browse" component={Browse} />
        <Route path="/VisualCourse" component={VisualCourse} />
        <ProtectedRoute path="/ProfilePage" component={ProfilePage} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
