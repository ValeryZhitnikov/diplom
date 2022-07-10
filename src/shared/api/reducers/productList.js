import { REQUEST_PRODUCTS_LIST, SUCCES_REQUEST_PRODUCTS_LIST, ERROR_REQUEST_PRODUCTS_LIST } from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: false,
  error: null
}

export default function productListReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS_LIST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SUCCES_REQUEST_PRODUCTS_LIST:
      const { productsList } = action.payload;
      return {
        ...state,
        products: productsList,
        loading: false,
        error: null
      };
    case ERROR_REQUEST_PRODUCTS_LIST:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    default: 
      return state;
  }
}