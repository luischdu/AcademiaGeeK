import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import VerPerfil from "../pages/VerPerfil";

const Perfil = () => {
  const userNameFromData = useSelector((state) => state.auth.name);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <div>
        <VerPerfil
          handleLogout={handleLogout}
          userNameFromData={userNameFromData}
        />
      </div>
    </div>
  );
};

export default Perfil;
