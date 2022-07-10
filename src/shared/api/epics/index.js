import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { REQUEST_PRODUCTS_LIST, REQUEST_POPULAR_LIST } from "../actions/actionTypes";
import { succesProducts, errorProducts, succesPopular, errorPopular } from "../actions/actionCreators";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

export const getProductsList = action$ => action$.pipe(
  ofType(REQUEST_PRODUCTS_LIST),
  switchMap(action => ajax.getJSON(`${process.env.REACT_APP_SERVER_URL}/items`).pipe(
    map(o => succesProducts(o)),
    catchError(e => errorProducts(e))
    )
  )
)

export const getPopularList = action$ => action$.pipe(
  ofType(REQUEST_POPULAR_LIST),
  switchMap(action => ajax.getJSON(`${process.env.REACT_APP_SERVER_URL}/top-sales`).pipe(
    map(o => succesPopular(o)),
    catchError(e => errorPopular(e))
    )
  )
)