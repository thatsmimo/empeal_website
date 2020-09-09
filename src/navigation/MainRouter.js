import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import AboutUs from "../screens/AboutUs";
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
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/about" component={AboutUs}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={Homepage}></Route>
      <Route exact path="/ourteam" component={OurTeam}></Route>
      <Route exact path="/library" component={Library}></Route>
      <Route exact path="/product" component={Product}></Route>
      <Route exact path="/pricing" component={Pricing}></Route>
      <Route exact path="/stories" component={Stories}></Route>
    </Switch>
  );
}
