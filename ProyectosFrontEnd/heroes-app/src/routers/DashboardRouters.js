import React from "react";
import { Redirect, Route, Switch } from "react-router";
import DcScreen from "../components/dc/DcScreen";
import HeroScreen from "../components/Heroes/HeroScreen";
import { Navbar } from "../components/iu/Navbar";
import MarvelScreen from "../components/Marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRouters = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/search/" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </div>
  );
};

export default DashboardRouters;
