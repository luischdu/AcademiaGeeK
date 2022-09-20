import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const PerfilUser = ({ handleLogout, userNameFromData, userPhoto }) => {
  useEffect(() => {
    document.title = "Perfil";
  }, []);
  return (
    <div>
      <h1>Hola soy tu perfil bienvenido {userNameFromData}</h1>

      <div class="text-center">
        <img src={userPhoto} class="rounded" alt="poto-perfil" />
      </div>
      <Link to='/login'>
        <div
          className="w-100 btn btn-lg  btn-outline-danger mt-3"
          onClick={handleLogout}
        >
          Cerrar sesion
        </div>
      </Link>
    </div>
  )
}

export default PerfilUser
