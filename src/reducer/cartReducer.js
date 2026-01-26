export default function CartReducer(state, action) {
  if (action.type === "addedtoCart") {
    let { id, title, price, quantity } = action.payload;
    let TotalPrice = parseFloat(price) * parseInt(quantity);
    let cartProduct = {
      id,
      title,
      price,
      totalPrice: TotalPrice,
      quantity,
    };
    let totalItems = state.totalItems + quantity;
    const newData = state.cart ? [...state.cart, cartProduct] : [cartProduct];
    return {
      ...state,
      cart: newData,
      totalItems: totalItems,
    };
  }
  if (action.type === "deleteItem") {
    let Quantity = state.cart.filter(
      (currItem) => currItem.id === action.payload,
    );
    let TotalItems = state.totalItems - Quantity[0]["quantity"];
    let updatedCart = state.cart.filter(
      (currItem) => currItem.id !== action.payload,
    );
    return {
      ...state,
      cart: updatedCart,
      totalItems: TotalItems,
    };
  }
}
