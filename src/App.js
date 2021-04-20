import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import ManageService from './components/Dashboard/ManageService/ManageService';
import Orders from './components/Dashboard/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/manageService">
            <ManageService />
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
