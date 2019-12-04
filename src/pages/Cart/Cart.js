import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ItemContainer from '../../containers/ItemContainer/ItemContainer';

const Cart = () => {
  const shop = useContext(ShopContext);

  const cartSellerIds = Object.getOwnPropertyNames(shop.cart.sellers);
  return (
    <div>
      {cartSellerIds.length > 0 ? (
        cartSellerIds
          .map(val => {
            const itemsIds = Object.getOwnPropertyNames(shop.cart.sellers[val]);
            return itemsIds.map(val2 => {
              return {
                ...shop.items[val2],
                count: shop.cart.sellers[val][val2]
              };
            });
          })
          .map(val => (
            <ItemContainer
              key={val[0].seller_id}
              items={val}
              cssClass="item_card"
              title={'Sprzedawca ' + val[0].seller_login}
            />
          ))
      ) : (
        <h3>Koszyk jest pusty</h3>
      )}

      <div>
        Do zapłaty: {shop.cart.totalPrice} {shop.cart.totalPriceCurrency}
      </div>
    </div>
  );
};

export default Cart;
