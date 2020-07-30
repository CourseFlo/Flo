import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Browse from './pages/Browse';
import VisualCourse from './pages/VisualCourse';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import { loadUser } from './redux/actions/auth';
import './App.css';

function App(props: any) { // TODO: prop types?
  const { loadUser } : { loadUser : Function } = props;
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <main>
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

export default connect(null, { loadUser })(App);
