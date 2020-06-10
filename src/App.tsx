import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BasicLogin from './pages/BasicLogin';
import Sam from './pages/Sam';
import Browse from './pages/Browse';
import Guanting from './pages/Guanting';
import TempNavbar from './components/TempNavbar';
import ErrorPage from './components/ErrorPage';
import Login from "./pages/Login";

function App() {
  return (
    <main>
      <TempNavbar />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/Browse" component={Browse} />
        <Route path="/Sam" component={Sam} />
        <Route path="/Guanting" component={Guanting} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
