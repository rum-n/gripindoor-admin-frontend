import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Users from './pages/users';
import Routes from './pages/routes';

function App() {
  return (
          <Router>
          <div className="App">
            <Sidebar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' component={Users} />
              <Route path='/routes' component={Routes} />
            </Switch>
          </div> 
        </Router>
  );
}

export default App;
