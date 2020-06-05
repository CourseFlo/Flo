import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';
import Brandon from './Brandon';
import Sepand from './Sepand';
import Sam from './Sam';
import Guanting from './Guanting';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path="/" component={Brandon} exact />
        <Route path="/Sepand" component={Sepand} />
        <Route path="/Sam" component={Sam} />
        <Route path="/Guanting" component={Guanting} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
}

export default App;
