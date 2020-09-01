import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import AboutUs from "../screens/AboutUs";
import Login from "../screens/Login";
import Homepage from "../screens/Homepage";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/about" component={AboutUs}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/home" component={Homepage}></Route>
    </Switch>
  );
}
