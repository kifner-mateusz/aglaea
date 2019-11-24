import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext';
import { UserContextProvider } from './context/UserContext';
import { CartContextProvider } from './context/CartContext';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import Categories from './pages/Categories/Categories';
import Tests from './pages/Tests/Tests';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <React.StrictMode>
        <UserContextProvider>
          <ShopContextProvider>
            <CartContextProvider>
              <Header />
              <Search />
              <HashRouter>
                <Switch>
                  <Route path="/tests/" component={Tests} />
                  <Route path="/product/" component={Product} />
                  <Route path="/category/" component={Categories} />
                  <Route path="/" component={Main} />
                </Switch>
              </HashRouter>
            </CartContextProvider>
          </ShopContextProvider>
        </UserContextProvider>
      </React.StrictMode>
    </div>
  );
};

export default App;
