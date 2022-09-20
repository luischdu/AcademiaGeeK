import React from "react";
import RegisterUser from "../pages/RegisterUser.jsx";
import validator from "validator";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import { useForm } from "../hooks/useForm";
import { setError, removeError } from "../action/uiError";
import { startRegisterWithEmailPasswordName, startGoogleLogin } from "../action/auth";


const Register = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const menssageAlert = (message) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const formValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("nombre requerido"));
      menssageAlert("nombre requerido");
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Emial requerido"));
      menssageAlert("email requerido");

      return false;
    } else if (password !== password2 || password < 5) {
      dispatch(setError("La contraseña es incorecta"));
      menssageAlert(
        "Contraseña incorrecta, asegurese que sea de minimo 5 caracteres"
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviado");
    if (formValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const handleGoogle =()=>{
    dispatch(startGoogleLogin())
}

  return (
    <div>
      <RegisterUser 
              handleSubmit={handleSubmit}
              name={name}
              email={email}
              password={password}
              password2={password2}
              handleInputChange={handleInputChange}
              handleGoogle = {handleGoogle}/>
    </div>
  );
};

export default Register;
