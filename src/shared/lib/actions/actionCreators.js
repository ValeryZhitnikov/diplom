import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "./actionTypes";

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: {product} };
};

export const deleteFromCart = (id, size) => {
  return { type: DELETE_FROM_CART, payload: {id, size} };
};

export const clearCart = () => {
  return {type: CLEAR_CART};
};