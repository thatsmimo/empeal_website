import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MainRouter from "./navigation/MainRouter";

function App() {
  return (
    <Router>
      <Header />
      <MainRouter />
    </Router>
  );
}

export default App;
