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
      throw new Error('shopReducer: action.type unknown');
  }
};

export default shopReducer;
