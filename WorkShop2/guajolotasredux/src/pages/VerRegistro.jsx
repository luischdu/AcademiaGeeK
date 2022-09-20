import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'



const Main = styled.main`
  max-width: 500px;
  margin: 0 auto;
`;

const VerRegistro = ({
    handleSubmit,
    name,
    email,
    password,
    password2,
    handleInputChange,
    handleGoogle
  }) => {
    return (
        <div>
                <Main className="form-signin d-flex justify-content-center">
        <form className="text-center" onSubmit={handleSubmit}>
     
          <h1 className="h3 mb-3 fw-normal">Registro de usuario</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nombre y Apellido"
              autoComplete="off"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Nombre completo</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              autoComplete="off"
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
              placeholder="Contraseña"
              name="password"
              autoComplete="off"
              value={password}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Verificar contraseña"
              name="password2"
              autoComplete="off"
              value={password2}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">Verifica la Contraseña</label>
          </div>

          <button className="w-100 btn btn-lg btn-outline-success mt-3" type="submit">
            Registrarse
          </button>
          <div
            className="w-100 btn btn-lg  btn-outline-warning mt-3"
          
             onClick={handleGoogle}
          >
           <FontAwesomeIcon icon={faGoogle} /> Registrarse con google
          </div>

          <div className="checkbox mt-3 mb-3">
            <Link to="/login">Ya tengo una cuenta</Link>
          </div>
          <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </Main>
        </div>
    )
}

export default VerRegistro
