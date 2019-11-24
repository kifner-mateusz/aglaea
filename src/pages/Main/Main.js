import React, { useContext, useEffect } from 'react';

import ItemContainer from '../../containers/ItemContainer/ItemContainer';

import './Main.css';
import { ShopContext } from '../../context/ShopContext';
import Spiner from '../../components/Spiner/Spiner';

const Main = props => {
  const shop = useContext(ShopContext);

  // useEffect(() => {
  //   shop.fetchAllItems('products/')
  //   // eslint-disable-next-line
  // }, [])

  // useEffect(() => {
  //   console.log(shop);
  //   if (shop.items !== undefined && shop.items.length > 0) {
  //   }
  // }, [shop]);

  return (
    <div className="container--1200">
      {Object.getOwnPropertyNames(shop.items).length > 0 ? (
        <>
          <ItemContainer
            //shop.items_featured_index.slice(0, 4).map(value => {
            //   return shop.items[value];
            //})
            items={shop.getItemsFeatured(5)}
            cssClass="item_card"
            title="Polecane"
          />
          <ItemContainer
            items={shop.getItemsNew(6)}
            cssClass="item_box"
            title="Nowe"
          />
        </>
      ) : (
        <Spiner />
      )}
    </div>
  );
};

export default Main;
