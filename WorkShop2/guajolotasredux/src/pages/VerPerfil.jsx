import React from "react";
import { Link } from "react-router-dom";


const VerPerfil = ({handleLogout, userNameFromData}) => {
  return (
    <div>
      <h1>Hola {userNameFromData}</h1>
      <Link to='/login'>
      <div
        className="w-100 btn btn-lg  btn-outline-danger mt-3"
        onClick={handleLogout}
      >
        Cerrar sesion
      </div>
      
      </Link>
    </div>
  );
};

export default VerPerfil;
