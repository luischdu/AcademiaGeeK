import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import Swal from "sweetalert2";

import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { setError, removeError } from "../../actions/uiError";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

/*   const payload = useSelector((state) => state.action);
  console.log(payload); */

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
    if (formValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
