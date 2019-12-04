import Item from '../../components/Item/Item';

/*
  cart:{
    sellers:{
      1: { 1: 2, 2: 2, 1: 2}
    }
    totalPrice: 54,
    totalPriceCurrency: "USD"
  }
*/

const cartReducer = (state, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'addItem':
      if (typeof newState.sellers[action.item.seller_id] !== 'undefined') {
        if (
          typeof newState.sellers[action.item.seller_id][action.item.id] !==
          'undefined'
        )
          newState.sellers[action.item.seller_id][action.item.id] +=
            action.count;
        else
          newState.sellers[action.item.seller_id][action.item.id] =
            action.count;
      } else {
        newState.sellers[action.item.seller_id] = {};
        newState.sellers[action.item.seller_id][action.item.id] = action.count;
      }
      console.log('cart data', newState);
      newState.totalPrice += action.item.price - action.item.sale;
      return newState;
    case 'removeItem':
      return state;
    case 'changeCurrency':
      return state;

    case 'clear':
      return {
        sellers: {},
        totalPrice: 0.0,
        totalPriceCurrency: ''
      };
    default:
      throw new Error('cartReducer: action.type unknown');
  }
};

export default cartReducer;
