import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Carrito from "../components/Carrito";
import Login from "../components/login";
import Registro from "../components/Registro";
import { ProductoForm } from "../components/productos/ProductoForm";
import EditarProducto from "./../components/productos/EditarProducto";
import Main from "../pages/Main";
import VerCompra from "../pages/VerCompra";
import Perfil from "../components/Perfil";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/config";
import { login } from "../actions/auth";
import Buscador from "../components/Buscador";

const appRoutes = () => {
  /*   const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]); */

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/vercompra" component={VerCompra} />
        <Route exact path="/crear-producto" component={ProductoForm} />
        <Route exact path="/editar-productos" component={EditarProducto} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default appRoutes;
