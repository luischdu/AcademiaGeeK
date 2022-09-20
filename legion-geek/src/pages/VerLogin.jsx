import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
  background: white;
`;

const VerLogin = ({
  email,
  password,
  handleInputChange,
  handleLogin,
  handleGoogle,
  loading,
  handleFacebook,
  handleRecover,
}) => {
  return (
    <Main className="form-signin d-flex justify-content-center">
      <form
        className="text-center mt-5 p-3 border"
        onSubmit={handleLogin}
        style={{ minWidth: "350px" }}
      >
        <h3> Iniciar sesión </h3>
        <div className="d-flex justify-content-between mt-3 mb-3">
          <button
            type="button"
            onClick={handleGoogle}
            style={{ background: "#4C8BF5", minWidth: "150px" }}
            class="btn btn-primary "
          >
            Google&nbsp;
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button
            type="button"
            style={{ background: "#3A5998", minWidth: "150px" }}
            class="btn btn-secondary "
            onClick={handleFacebook}
          >
            Facebook&nbsp;
            <FontAwesomeIcon icon={faFacebook} />
          </button>
        </div>

        <div class="mb-3 mt-4">
          {/*  <label class="form-label">Correo electrónico</label> */}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Dirección de correo electrónico"
          />
        </div>
        <div class="mb-3">
          {/*   <label class="form-label">Contraseña</label> */}
          <input
            type="password"
            class="form-control"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Contraseña"
          />
        </div>

        <div class="d-grid gap-1">
          <button class="btn btn-primary" disabled={loading} type="submit">
            Iniciar sesión
          </button>
        </div>
        <div className="mt-3">
          <p
            type="button"
            class="btn m-0"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            ¿Olvidaste tu contraseña?
          </p>
        </div>
        <div className="checkbox  mt-2 ">
          ¿No tienes una cuenta?&nbsp;
          <Link to="/registro">Regístrate</Link>
        </div>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Restablecer contraseña de Legion Geek
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  class="form-control"
                  placeholder="Dirección de correo electrónico"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={handleRecover}
                >
                  Restablecer contraseña
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className=" mt-1 text-muted">&copy; 2021</p>
      </form>
    </Main>
  );
};

export default VerLogin;
