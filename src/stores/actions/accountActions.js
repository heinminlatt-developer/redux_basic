import { type } from "@testing-library/user-event/dist/type";

export const add = (amount) => {
  return (dispatch) => {
    dispatch({
      type: add,
      payload: amount,
    });
  };
};

export const remove = (amount) => {
  return (dispatch) => {
    dispatch({
      type: remove,
      payload: amount,
    });
  };
};
