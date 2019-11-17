import React, { useReducer } from "react";
import useHttp from "../hooks/useHttp";

const ShopContext = React.createContext({
  items: {},
  axiosConfig: {},
  host: "https://shop-json-test-api.herokuapp.com/",
  getItems: () => {}
});

const shopReducer = (state, action) => {
  let data = action.data;
  switch (action.type) {
    case "set":
      return data;
    case "add":
      return state.push(data);
    case "remove":
      return state.fliter((value, index) => {
        return value.id !== parseInt(data);
      });
    case "reset":
      return [];
    default:
      return state;
  }
};

const ShopContextProvider = props => {
  const [sendRequest, loading, resData, httpCallback] = useHttp();
  const [items, itemsReducer] = useReducer(shopReducer, []);

  const fetchAllItems = (url, callback) => {
    sendRequest(url, data => {
      itemsReducer({ type: "set", data });
    });
  };

  return (
    <ShopContext.Provider
      value={{
        items: items,
        axiosConfig: {},
        fetchAllItems,
        host: "https://shop-json-test-api.herokuapp.com/"
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
