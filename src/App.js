import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MainRouter from "./navigation/MainRouter";

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
