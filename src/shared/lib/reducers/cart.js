import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "../actions/actionTypes";

const initialState = {
  cartList: []
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: 
      const { product } = action.payload;
      const cartList = state.cartList;
      const cartListItem = cartList.findIndex(item => item.id == product.id && item.size === product.size);
      if (cartListItem != -1) {
        cartList[cartListItem].count += product.count;
      } else {
        cartList.push(product);
      } 
      return {
        ...state,
        cartList
      }
    case DELETE_FROM_CART:
      const { id, size } = action.payload;
      const newCartList = state.cartList.filter(item => {
        if (item.id === id) {
          return item.size !== size;
        } else {
          return item.id !== id;
        }
      });
      return {
        ...state,
        cartList: newCartList
      }
    case CLEAR_CART:
      return {
        ...state,
        cartList: []
      }
    default:
      return state;
  }
}