import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import AboutUs from "../screens/AboutUs";
import Login from "../screens/Login";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard}></Route>
      <Route exact path="/about" component={AboutUs}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  );
}
