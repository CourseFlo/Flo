import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

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
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import CourseModal from './components/CourseModal';

interface Props {
  loadUser: Function
}

function App(props: Props) {
  const { loadUser }: Props = props;
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    loadUser();
  }, []);

  const Theme = createMuiTheme({
    palette: {
      primary: green,
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <main>
      <ThemeProvider theme={createMuiTheme(Theme)}>
        <CssBaseline />
        <Navbar darkModeSwitch={{ darkMode, setDarkMode }} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/Browse" component={Browse} />
          <Route path="/VisualCourse" component={VisualCourse} />
          <ProtectedRoute path="/ProfilePage" component={ProfilePage} />
          <Route path="/signup" component={Signup} />
          <Route component={ErrorPage} />
        </Switch>
        <LoginModal />
        <SignupModal />
        <CourseModal />
      </ThemeProvider>
    </main>
  );
}

export default connect(null, { loadUser })(App);
