import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";


export const routes = {
  root: '/',
  login: '/users/login',
  signup: '/signup'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={Signup} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
