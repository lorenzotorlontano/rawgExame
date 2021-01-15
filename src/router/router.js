import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from "../components/Drawer/Drawer";
import Dashboard from "../pages/dashboard/dashboard";
import Details from "../pages/details/details";
import Screenshoot from "../pages/screenshoot/screenshoot";
import Search from "../pages/search/search";
import "./router.css";
function RouterView() {
  return (
    <div className="containerRouterView">
      <Router>
        <Drawer />
        <div className="containerSwitchRouter">
          <Switch>
            <Route exact path="/screenshoot/:id">
              <Screenshoot />
            </Route>
            <Route exact path="/search/:id">
              <Search />
            </Route>
            <Route exact path="/details/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default RouterView;
