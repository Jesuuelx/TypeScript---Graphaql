import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRouter } from "./MainRouter";


export const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};
