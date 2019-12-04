import React, { useReducer, useEffect, useState } from 'react';
import useHttpQue from '../hooks/useHttpQue';
import shopReducer from './reducers/shopReducer';
import cartReducer from './reducers/cartReducer';

const host = 'https://shop-json-test-api.herokuapp.com/';

const ShopContext = React.createContext({
  itemsNewIndex: [],
  itemsFeaturedIndex: [],
  itemCurrent: undefined,
  items: {},
  cart: {},
  fetchItems: () => {},
  axiosConfig: {},
  host
});

const ShopContextProvider = props => {
  const [sendRequest, requests] = useHttpQue(host, {});

  const [items, itemsDispatch] = useReducer(shopReducer, {});
  const [cart, cartDispatch] = useReducer(cartReducer, {
    sellers: {},
    totalPrice: 0.0,
    totalPriceCurrency: 'USD'
  });

  const [itemsNewIndex, setItemsNewIndex] = useState([]);
  const [itemsFeaturedIndex, setItemsFeaturedIndex] = useState([]);
  const [itemCurrent, setItemCurrent] = useState(undefined);

  useEffect(() => {
    sendRequest('shop', data => {
      setItemsFeaturedIndex(data['products-new']);
      setItemsNewIndex(data['products-featured']);
    });
  }, []);

  useEffect(() => {
    // console.log(itemsFeaturedIndex);
    if (itemsNewIndex.length > 0 && itemsFeaturedIndex.length > 0) {
      fetchItems(
        itemsFeaturedIndex
          .concat(itemsNewIndex)
          .concat(typeof itemCurrent === 'undefined' ? [] : [itemCurrent])
      );
    }
  }, [itemsFeaturedIndex, itemsNewIndex]);

  const fetchItems = (arrayOfIds, callback) => {
    let url =
      'products?' +
      arrayOfIds
        .map((value, index) =>
          index === 0 ? 'id=' + parseInt(value) : '&id=' + value
        )
        .join('');
    sendRequest(url, data => {
      itemsDispatch({ type: 'set', data: data });
    });
  };

  const fetchItem = (id, callback) => {
    let url = 'products?id=' + id;
    sendRequest(url, data => {
      itemsDispatch({ type: 'set', data: data });
    });
  };

  const getItemsFeatured = count => {
    return itemsFeaturedIndex.slice(0, count).map(value => {
      return items[value];
    });
  };

  const getItemsNew = count => {
    return itemsNewIndex.slice(0, count).map(value => {
      return items[value];
    });
  };

  const getItemCurrent = () => {
    return items[itemCurrent];
  };

  const addItemToCart = (item, count) => {
    cartDispatch({
      type: 'addItem',
      item: item,
      count
    });
  };

  return (
    <ShopContext.Provider
      value={{
        items,
        itemsFeaturedIndex,
        itemsNewIndex,
        fetchItems,
        getItemCurrent,
        getItemsFeatured,
        getItemsNew,
        setItemCurrent,
        // getCartView,
        cart,
        totalPrice: cart.totalPrice,
        currency: cart.currency,
        addItemToCart,
        // getItem,
        axiosConfig: {},
        host
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
