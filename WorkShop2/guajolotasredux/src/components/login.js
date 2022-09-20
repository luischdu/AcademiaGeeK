import React from "react";
import { useDispatch, useSelector } from "react-redux";

import VerLogin from "../pages/VerLogin";
import { useForm } from "../hooks/useForm";
import { startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from "../actions/auth";

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
      <VerLogin
        email={email}
        password={password}
        handleInputChange={handleInputChange}
        handleLogin={handleLogin}
        handleGoogle={handleGoogle}
        handleFacebook={handleFacebook}
        loading={loading}
      />
    </div>
  );
};

export default Login;
