import { types } from "../types/types";
import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
} from "../../firebase/firebase-config";
import { StartLoading, FinishLoading, StopLoading } from "./uiError";
import Swal from "sweetalert2";

export const login = (uid, displayName, photoURL) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      photoURL,
    },
  };
};

function alerta(mensaje) {
  Swal.fire({
    position: "center",
    icon: "error",
    title: mensaje,
    showConfirmButton: false,
    timer: 1500,
  });
  
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        console.log("photo", user.photoURL);
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((e) => {
        alerta(e.message)
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        console.log("photo", user.photoURL);
        dispatch(login(user.uid, user.displayName, user.photoURL));
      })
      .catch((e) => {
        alerta(e.message)
      });
  };
};

export const startFacebookLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        console.log(user);
        dispatch(login(user.uid, user.displayName, user.photoURL));
        console.log(user);
      })
      .catch((e) => {
        alerta(e.message)
      });
  };
};

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(StartLoading());
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("photo", user.photoURL);
        dispatch(login(user.uid, user.displayName, user.photoURL));
        dispatch(FinishLoading());
      })
      .catch((e) => {
        alerta(e.message)
        dispatch(StopLoading());
      });
  };
};

export const recover = () => ({
  type: types.recoverPassword,
});

export const recoverPassword = (email) => {
  return (dispatch) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
       
        dispatch(recover());
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Enviamos a su correo el enlace para restablecer su contraseña`,
          showConfirmButton: false,
          timer: 2200,
        });
      })
      .catch((e) => {
        console.log(e.message)
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Correo no invalido, asegurese de ingresar su dirección de correo electronico`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  }
}

export const logout = () => ({
  type: types.logout,
});

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut();

    dispatch(logout());
  };
};
