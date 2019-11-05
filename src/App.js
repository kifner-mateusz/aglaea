import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { ShopContextProvider } from "./context/ShopContext";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ShopContextProvider>
        <Header />
        <HashRouter>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </HashRouter>
      </ShopContextProvider>
    </div>
  );
};

export default App;
