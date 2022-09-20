import { types } from "../types/types";
import {
  firebase,
  googleAuthProvider,
  facebookProvider,
} from "../firebase/config";
import { StartLoading, FinishLoading, StopLoading } from "./uiError";
import Swal from "sweetalert2";

export const login = (uid, displayName, email, photoURL) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      email,
      photoURL,
    },
  };
};



export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
      })
      .catch((e) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${e.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return(dispatch) => {
    dispatch(StartLoading());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email,user.photoURL));
        dispatch(FinishLoading());
      })
      .catch((e) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${e.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(StopLoading());
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email,user.photoURL));
      })
      .catch((e) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${e.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};
export const startFacebookLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName, user.email,user.photoURL));
      })
      .catch((e) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${e.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};



export const logout = () => ({
  type: types.logout,
});

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut();
    dispatch(logout());
  };
};
