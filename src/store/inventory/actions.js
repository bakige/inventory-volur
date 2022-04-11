import {
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORIES_FAILURE,
  LOAD_INVENTORY_SUCCESS,
  LOAD_INVENTORY_FAILURE,
} from "./constants";

export const fetch_categories = () => (dispatch) => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://us-central1-volur-assessment.cloudfunctions.net/metadata`
  )
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: LOAD_CATEGORIES_SUCCESS,
        payload: res.categories,
      })
    )
    .catch((error) => {
      console.error(error);
      dispatch({ type: LOAD_CATEGORIES_FAILURE, payload: error });
    });
};

export const fetch_inventory = (id) => (dispatch) => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://us-central1-volur-assessment.cloudfunctions.net/inventory`,
    {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: id }),
    }
  )
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: LOAD_INVENTORY_SUCCESS,
        payload: res.results,
      })
    )
    .catch((error) => {
      console.error(error);
      dispatch({ type: LOAD_INVENTORY_FAILURE, payload: error });
    });
};
