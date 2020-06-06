import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Profile from "./user/Profile";
import { UserContext } from "../context/user/UserState";

const AppNavbar = () => {
  const { user, isAuthenticated } = useContext(UserContext);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Login/>}
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppNavbar;
