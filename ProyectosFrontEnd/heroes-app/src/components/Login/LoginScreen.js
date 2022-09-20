import React from "react";

const LoginScreen = ({history}) => {
  const handlelogin = () => {
    history.push('/')
  };
  return (
    <div>
      <h1>Login</h1>

      <button type ='button' className="btn btn-outline-success" onClick={handlelogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
