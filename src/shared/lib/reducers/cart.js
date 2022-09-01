import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/actionTypes";

const initialState = {
  cartList: [],
  totalPrice: 0
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: 
      const { product } = action.payload;
      const cartList = state.cartList;
      const cartListItem = cartList.findIndex(item => item.id == product.id);
      if (cartListItem != -1) {
        cartList[cartListItem].count += product.count;
      } else {
        cartList.push(product);
      } 
      return {
        ...state,
        totalPrice: state.totalPrice + +product.price * product.count,
        cartList
      }
    case DELETE_FROM_CART:
      const { id, price } = action.payload;
      const newCartList = state.cartList.filter(item => {
        return item.id !== id;
      });
      return {
        ...state,
        cartList: newCartList,
        totalPrice: state.totalPrice - price
      }
    default:
      return state;
  }
}