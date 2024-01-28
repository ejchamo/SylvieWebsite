import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import NewImageForm from "./paintings/NewImageForm";
import Paintings from "./paintings/Paintings";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <h2>Hello from react</h2>
        </Route>
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/new-image" component={NewImageForm} />
        <Route exact path="/paintings" component={Paintings} />
      </Switch>
    </Router>
  );
};

export default hot(App);
