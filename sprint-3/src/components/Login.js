import React from "react";
import LoginUser from "../pages/LoginUser.jsx";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from "../action/auth";

const Login = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(startGoogleLogin());
  };

  const handleFacebook = () => {
    dispatch(startFacebookLogin());
  };


  return (
    <div>
      <LoginUser
        email={email}
        password={password}
        handleInputChange={handleInputChange}
        handleLogin={handleLogin}
        handleGoogle={handleGoogle}
        loading={loading}
        handleFacebook={handleFacebook}
      />
    </div>
  );
};

export default Login;
