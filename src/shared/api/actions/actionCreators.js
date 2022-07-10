import { REQUEST_PRODUCTS_LIST, 
  SUCCES_REQUEST_PRODUCTS_LIST, ERROR_REQUEST_PRODUCTS_LIST, 
  REQUEST_POPULAR_LIST, SUCCES_REQUEST_POPULAR_LIST, ERROR_REQUEST_POPULAR_LIST } from "./actionTypes";

export function requestProductsList() {
  return { type: REQUEST_PRODUCTS_LIST };
}

export function succesProducts(productsList) {
  return { type: SUCCES_REQUEST_PRODUCTS_LIST, payload: {productsList} };
}

export function errorProducts(error) {
  return { type: ERROR_REQUEST_PRODUCTS_LIST, payload: {error} };
}

export function requestPopularList() {
  return { type: REQUEST_POPULAR_LIST };
}

export function succesPopular(popularList) {
  return { type: SUCCES_REQUEST_POPULAR_LIST, payload: {popularList} };
}

export function errorPopular(error) {
  return { type: ERROR_REQUEST_POPULAR_LIST, payload: {error} };
}