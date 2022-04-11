import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE,
  LOAD_INVENTORY_SUCCESS,
  LOAD_INVENTORY_FAILURE,
} from "./constants";

const initialState = {
  categories: [],
  items: [],
};

export const categoriesReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOAD_CATEGORIES_SUCCESS:
      return [...state, ...payload];
    case LOAD_CATEGORIES_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export const inventoryReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOAD_INVENTORY_SUCCESS:
      return [...state, ...payload];
    case LOAD_INVENTORY_FAILURE:
      return payload.error;
    default:
      return state;
  }
};
