import React, { useReducer } from 'react';
import useHttp from '../hooks/useHttp';

const CartContext = React.createContext({
  cart: [],
  price: [],
  axiosConfig: {},
  host: 'https://shop-json-test-api.herokuapp.com/'
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.data;
    case 'add':
      return state.push(action.data);
    case 'remove':
      return state.fliter((value, index) => {
        return value.id !== parseInt(action.data);
      });
    case 'reset':
      return [];
    default:
      throw new Error('CartContext: action.type unknown');
  }
};

const CartContextProvider = props => {
  const [sendRequest, loading, resData] = useHttp();
  const [items, itemsReducer] = useReducer(cartReducer, []);

  const fetchAllItems = (url, callback) => {
    sendRequest(url, data => {
      itemsReducer({ type: 'set', data });
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        axiosConfig: {},
        fetchAllItems,
        host: 'https://shop-json-test-api.herokuapp.com/'
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
