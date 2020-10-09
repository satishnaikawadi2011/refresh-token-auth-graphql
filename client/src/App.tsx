import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Bye } from './pages/Bye';

function App() {
  return (
<BrowserRouter>
    <div>
    <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/bye">Bye</Link></li>
  <li><Link to="login">Login</Link></li>
  {/* <li><Link to="">About</Link></li> */}
</ul>
    </div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/bye' component={Bye} />
    </Switch>
</BrowserRouter>
  );
}

export default App;
