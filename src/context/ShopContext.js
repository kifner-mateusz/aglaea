import React, { useReducer, useEffect, useState } from 'react';
import useHttpQue from '../hooks/useHttpQue';
import ItemPreview from '../components/ItemPreview/ItemPreview';

const host = 'https://shop-json-test-api.herokuapp.com/';

const ShopContext = React.createContext({
  itemsNewIndex: [],
  itemsFeaturedIndex: [],
  itemCurrent: undefined,
  items: [],
  fetchItems: () => {},
  axiosConfig: {},
  host
});

const shopReducer = (state, action) => {
  switch (action.type) {
    case 'set':
      console.log('shop data', action.data);
      let newState = { ...state };
      for (let item of action.data) {
        newState[item.id] = item;
      }
      return newState;
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

const ShopContextProvider = props => {
  const [sendRequest, requests] = useHttpQue(host, {});

  const [items, itemsDispatch] = useReducer(shopReducer, []);

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
        itemsFeaturedIndex.concat(itemsNewIndex).concat([itemCurrent])
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

  // const getItem = id => {
  //   if (id in items) {
  //     return items[id];
  //   } else {
  //     fetchItem(id);
  //     return {};
  //   }
  // };

  const getItemsFeatured = count => {
    // console.log(
    //   itemsFeaturedIndex.slice(0, count).map(value => {
    //     return items[value];
    //   })
    // );
    return itemsFeaturedIndex.slice(0, count).map(value => {
      return items[value];
    });
  };

  const getItemsNew = count => {
    // console.log(
    //   itemsNewIndex.slice(0, count).map(value => {
    //     return items[value];
    //   })
    // );
    return itemsNewIndex.slice(0, count).map(value => {
      return items[value];
    });
  };

  const getItemCurrent = () => {
    return items[itemCurrent];
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
