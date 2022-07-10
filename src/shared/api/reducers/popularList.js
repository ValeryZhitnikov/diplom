import { REQUEST_POPULAR_LIST, SUCCES_REQUEST_POPULAR_LIST, ERROR_REQUEST_POPULAR_LIST } from "../actions/actionTypes";

const initialState = {
  popularProducts: [],
  loading: false,
  error: null
}

export default function popularProductsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POPULAR_LIST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case SUCCES_REQUEST_POPULAR_LIST:
      const { popularList } = action.payload;
      return {
        ...state,
        popularProducts: popularList,
        loading: false,
        error: null
      }
    case ERROR_REQUEST_POPULAR_LIST:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error
      }
    default:
      return state
  }
}