import React, { useContext } from 'react';

import Item from '../../components/Item/Item';
import ItemContainer from '../../containers/ItemContainer/ItemContainer';
import { ShopContext } from '../../context/ShopContext';

const Product = props => {
  const shop = useContext(ShopContext);
  let id = props.location.pathname.split('/product/')[1];
  shop.setItemCurrent(id);
  let item = shop.getItemCurrent();
  return (
    <div className="container--1200">
      {item && <Item cssClass="item_product" isUrl={false} {...item} />}
      {Object.getOwnPropertyNames(shop.items).length > 0 && (
        <ItemContainer
          items={shop.getItemsNew(5)}
          cssClass="item_card"
          title="Inne przedmioty sprzedającego"
        />
      )}
    </div>
  );
};
export default Product;
