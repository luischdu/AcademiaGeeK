import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`;

const VerLogin = ({
  email,
  password,
  handleInputChange,
  handleLogin,
  handleGoogle,
  handleFacebook,
  loading,
}) => {
  return (
    <Main className="form-signin d-flex justify-content-center">
      <form className="text-center" onSubmit={handleLogin}>
    
        <h1 className="h3 mb-3 fw-normal">Log in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-2"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingInput">Correo electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-outline-success mt-2"
          type="submit"
          disabled={loading}
        >
          Iniciar sesión
        </button>
        <div
          className="w-100 btn btn-lg  btn-outline-warning mt-3"
          onClick={handleGoogle}
          disabled={loading}
        >
          <FontAwesomeIcon icon={faGoogle} /> Iniciar sesión con google
        </div>
        <div
          className="w-100 btn btn-lg  btn-outline-info mt-3"
          onClick={handleFacebook}
          disabled={loading}
        >
          <FontAwesomeIcon icon={faFacebook} /> Iniciar sesión con Facebook
        </div>

        <div className="checkbox  mt-3 mb-3">
          <Link to="/registro">No tengo cuenta</Link>
        </div>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </Main> 
  );
}; 

export default VerLogin;
