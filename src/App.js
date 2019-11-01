import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

import "./App.css";

const App = props => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
