import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`;

const VerRegister = ({
  handleSubmit,
  name,
  email,
  password,
  password2,
  handleInputChange,
  handleGoogle,
  handleFacebook
}) => {
  return (
    <div>
      <Main className="form-signin d-flex justify-content-center">
        <form className="text-center mt-5 p-3 border" 
        onSubmit={handleSubmit}
        style={{minWidth:'350px'}} >
          
          <h3 className="mb-3 ">Registro de usuario</h3>
          <div className="d-flex justify-content-between mt-3 mb-3">
          <button type="button"
          onClick={handleGoogle}
            style={{ 'background': '#4C8BF5' ,minWidth:'150px'}}
            class="btn btn-primary "
          >Google&nbsp;
                      <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button type="button"
            style={{ 'background': '#3A5998', minWidth:'150px'}}
            class="btn btn-secondary "
            onClick={handleFacebook}
          >Facebook&nbsp;
                      <FontAwesomeIcon icon={faFacebook} />
          </button>
        </div>
         
        <div class="mb-3">
     {/*    <label htmlFor="floatingInput">Nombre completo</label> */}
          <input type="text"
            class="form-control"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Nombre"
            autoComplete="off" />
        </div>
        
        <div class="mb-3">
     {/*    <label htmlFor="floatingInput">Correo electronico</label> */}
        <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Correo electrónico"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
        </div>
        <div class="mb-3">
       {/*  <label htmlFor="floatingInput">Contraseña</label> */}
        <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              name="password"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />
        </div>
       
        <div class="mb-3">
        {/* <label htmlFor="floatingPassword">Verifica la Contraseña</label> */}
        <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Verificar contraseña"
              name="password2"
              autoComplete="off"
              value={password2}
              onChange={handleInputChange}
            />
        </div>
  
        <div class="d-grid gap-1">
            <button 
                class="btn btn-primary"
                type="submit"> 
                Regístrate
                </button>
        </div>
        
          <div className="checkbox mt-3 mt-3">¿Ya tienes una cuenta?&nbsp;
            <Link to="/login">Iniciar sesión</Link>
          </div>
          <p className="mt-2 text-muted">&copy; 2021</p>
        </form>
      </Main>
    </div>
  );
};

export default VerRegister;
