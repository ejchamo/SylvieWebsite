import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import SignInForm from "./authentication/SignInForm";
import NavBar from "./layout/NavBar";
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
      <div className="grid-x">
        <div className="cell medium-2">
          <NavBar user={currentUser} />
        </div>
        <div className="cell medium-10">
          <Switch>
            <Switch>
              <Redirect exact from="/" to="/paintings" />
              <Route exact path="/user-sessions/new" component={SignInForm} />
              <Route exact path="/new-image" component={NewImageForm} />
              <Route
                exact
                path="/paintings"
                render={(props) => {
                  return <Paintings user={currentUser} {...props} />;
                }}
              />
            </Switch>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default hot(App);
