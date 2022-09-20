import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginScreen from "../components/Login/LoginScreen";
import DashboardRouters from "./DashboardRouters";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DashboardRouters} />
        </Switch>
      </div>
    </Router>
  );
}
