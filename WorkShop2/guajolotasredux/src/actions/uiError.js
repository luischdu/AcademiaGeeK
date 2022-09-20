import { types } from "../types/types";

export const setError = (err) => {
  return {
    type: types.uiSetError,
    payload: err,
  };
};

export const removeError = () => {
  return {
    type: types.uiRemoveError,
  };
};

export const StartLoading = () => {
  return {
    type: types.uiStarLogin,
  };
};

export const FinishLoading = () => {
  return {
    type: types.uiFinishLogin,
  };
};

export const StopLoading = () => {
  return {
    type: types.uiStopLogin,
  };
};
