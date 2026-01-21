const initialState = [
  { id: null, title: "", stocks: null, category: "", price: null }
];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CART": {
      console.log(state);
      if (state[0].id === null) {
        return [action.payload];
      } else {
        return [...state, action.payload];
      }
    }
    default:
      return state;
  }
}

export { initialState, cartReducer };