import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Bye } from './pages/Bye';
import { setAccessToken } from './utils/Apollo/accessToken';

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/refresh_token", {
      method: "POST",
      credentials: "include"
    }).then(async x => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
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
