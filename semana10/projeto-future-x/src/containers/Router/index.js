import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import TripListPage from "../TripListPage";
import TripCreationPage from "../TripCreationPage";




export const routes = {
  root: "/",
  login: "/login",
  tripList: "/trips/list",
  tripCreation: "/trips/create"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.tripList} component={TripListPage} />
        <Route exact path={routes.tripCreation} component={TripCreationPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
