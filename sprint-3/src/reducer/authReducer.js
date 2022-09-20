import { types } from "../types/types";

const initialState ={
  uid :null,
  displayName:null,
  email:null,
  photoURL:`https://graph.facebook.com/4102183623157771/picture`,
}


export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
