import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BasicLogin from './pages/BasicLogin';
import Sam from './pages/Sam';
import Browse from './pages/Browse';
import Guanting from './pages/Guanting';
import TempNavbar from './components/TempNavbar';
import ErrorPage from './components/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <main>
      <TempNavbar />
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/Browse" component={Browse} />
        <Route path="/Sam" component={Sam} />
        <Route path="/Guanting" component={Guanting} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
