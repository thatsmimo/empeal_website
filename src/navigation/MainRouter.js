import React from "react";
import { Route, Switch } from "react-router-dom";
// import Dashboard from "../screens/Dashboard";
import Company from "../screens/Company";
import Login from "../screens/Login";
import Homepage from "../screens/Homepage";
import OurTeam from "../screens/OurTeam";
import Library from "../screens/Library";
import Product from "../screens/Product";
import Pricing from "../screens/Pricing";
import Stories from "../screens/Stories";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/ourteam" component={OurTeam} />
      <Route exact path="/library" component={Library} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/stories" component={Stories} />
    </Switch>
  );
}
