import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startLogout } from "../Redux/actions/Auth";
import VerPerfil from "../pages/VerPerfil";

const PerfilUsuario = () => {
  const userNameFromData = useSelector((state) => state.auth.name);
  
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const photoProfile = useSelector(state => state.auth.photoURL)
  return (
    <div>
      <VerPerfil handleLogout={handleLogout} userNameFromData={userNameFromData} photoProfile={photoProfile}/>
    </div>
  );
};

export default PerfilUsuario;
