import React, { useContext, useEffect } from "react";
import Search from "../../components/Search/Search";

import ItemContainer from "../../containers/ItemContainer/ItemContainer";

import "./Main.css";
import { ShopContext } from "../../context/ShopContext";
import Spiner from "../../components/Spiner/Spiner";

const Main = props => {
  const shop = useContext(ShopContext);

  useEffect(() => {
    shop.fetchAllItems("products/");
  }, []);

  useEffect(() => {
    console.log(shop);
    if (shop.items !== undefined && shop.items.length > 0) {
    }
  }, [shop.items]);

  return (
    <div className="main">
      <Search />
      {shop.items !== undefined && shop.items.length > 0 ? (
        <>
          <ItemContainer
            items={shop.items.filter((value, index) => {
              return index < 5;
            })}
            class="item_card"
            title="Polecane"
          />
          <ItemContainer
            items={shop.items.filter((value, index) => {
              return index < 6;
            })}
            class="item_box"
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
