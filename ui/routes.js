import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Pages, Users, ShowPage, NewPage } from "./containers";
import { App, Home, OfficeDev, MaterialUI, Reactstrap } from "./components";

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <route path="pages">
          <IndexRoute component={Pages} />
          <Route path=":id" component={ShowPage} />
        </route>
        <route path="users">
          <IndexRoute component={Users} />
        </route>
        <route path="OfficeDev">
          <IndexRoute component={OfficeDev} />
        </route>
        <route path="MaterialUI">
          <IndexRoute component={MaterialUI} />
        </route>
        <route path="Reactstrap">
          <IndexRoute component={Reactstrap} />
        </route>
        Reactstrap
      </Route>
    </Router>
  );
};
