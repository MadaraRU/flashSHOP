import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (key) => key.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((key) =>
            key.product === existItem.product ? item : key
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (key) => key.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
