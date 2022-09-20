import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startLogout } from "../action/auth";
import PerfilUser from "../pages/PerfilUser";

const Perfil = () => {

  const dispatch = useDispatch();

  const userNameFromData = useSelector((state) => state.auth.name);
  const userPhoto = useSelector((state) => state.auth.photoURL);




  //https://graph.facebook.com/4102183623157771/picture

  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div>
      <PerfilUser
        handleLogout={handleLogout}
        userNameFromData={userNameFromData}
        userPhoto={userPhoto}
      />
    </div>
  );
};

export default Perfil;
