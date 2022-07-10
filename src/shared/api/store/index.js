import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import productListReducer from "../reducers/productList";
import popularProductsReducer from "../reducers/popularList";
import { getProductsList, getPopularList } from "../epics";

const reducer = combineReducers({
  productList: productListReducer,
  popularList: popularProductsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const epic = combineEpics(
  getProductsList,
  getPopularList
);

const epicMiddleware = createEpicMiddleware();

const store = legacy_createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;