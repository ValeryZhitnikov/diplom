import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";

export const addToCart = (product) => {
  return { type: ADD_TO_CART, payload: {product} };
};

export const deleteFromCart = (id, price) => {
  return { type: DELETE_FROM_CART, payload: {id, price} };
};