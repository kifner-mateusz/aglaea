import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext';
import { UserContextProvider } from './context/UserContext';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Categories from './pages/Categories/Categories';
import Cart from './pages/Cart/Cart';

import Tests from './pages/Tests/Tests';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <React.StrictMode>
        <UserContextProvider>
          <ShopContextProvider>
            <HashRouter>
              <Header />
              <Search />
              <Switch>
                <Route path="/tests/" component={Tests} />
                <Route path="/cart/" component={Cart} />
                <Route path="/product/" component={Product} />
                <Route path="/category/" component={Categories} />
                <Route path="/" component={Main} />
              </Switch>
            </HashRouter>
          </ShopContextProvider>
        </UserContextProvider>
      </React.StrictMode>
    </div>
  );
};

export default App;
