import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import cartReducer from "../reducers/cart";
import { loadState } from "../localStorage";

const reducer = combineReducers({
  cartList: cartReducer
});

const persistedState = loadState();


// TODO Пока закомментировал чтобы разобраться, нужен ли тут вообще observable
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const epic = combineEpics(
  
// );

// const epicMiddleware = createEpicMiddleware();

// const store = legacy_createStore(reducer, composeEnhancers(
//   applyMiddleware(epicMiddleware)
// ));

// epicMiddleware.run(epic);

const store = legacy_createStore(reducer, persistedState);

export default store;