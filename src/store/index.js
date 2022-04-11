import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

import thunk from "redux-thunk";
import {categoriesReducer, inventoryReducer} from "./inventory/reducers";

const reducers = combineReducers({ categories: categoriesReducer, inventory: inventoryReducer });

export const history = createBrowserHistory();

const initialState = {
  categories: [],
  inventory: []
};
const enhancers = [];
const middleware = [routerMiddleware(history), thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(reducers, initialState, composedEnhancers);

export default store;
