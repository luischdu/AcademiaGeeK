import { types } from "../types/types";

export const credential = (credential) => {
  return {
    type: types.movieTrailer,
    payload: credential,
  };
};

export const setCredential = (data) => {
  return (dispatch) => {
    dispatch(credential(data));
  };
};
