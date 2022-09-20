import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import { login } from "../Redux/actions/Auth";
import { useDispatch } from "react-redux";

import Header from "../pages/Header";

import Cursos from "../components/Cursos";
import Login from "../components/Login";
import Registro from "../components/Registro";
import PerfilUsuario from "../components/PerfilUsuario";
import Noticias from "../pages/Noticias";

import PublicRouter from "./PublicRouter";
import PriveteRouter from "./PrivateRouter";
import VerFooter from "../pages/verFooter";
import Article from "../pages/Article";
import Editor from "../pages/Editor";
import { Home } from "../components/Home";
import Chat from "../components/Chat";
import Conocenos from "../components/Conocenos";
import Favorites from "../pages/Favorites";

const AppRoute = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />

      <div style={{ minHeight: "60vh", marginTop: "60px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/*    <Route exact path="/" component={Noticias} /> */}
          <PublicRouter
            exact
            path="/login"
            component={Login}
            isAuthenticated={isLoggedIn}
          />
          <PublicRouter exact path="/registro" component={Registro} isAuthenticated={isLoggedIn} />
          <Route exact path="/articulos" component={Noticias} />
          <Route exact path="/article/:id" component={Article} />
          <Route exact path="/cursos" component={Cursos} />
          <Route exact path="/conocenos" component={Conocenos} />

          <PriveteRouter
            exact
            path="/editor"
            isAuthenticated={isLoggedIn}
            component={Editor}
          />
          <PriveteRouter
            exact
            path="/favoritos"
            isAuthenticated={isLoggedIn}
            component={Favorites}
          />
          <PriveteRouter
            exact
            path="/chat"
            isAuthenticated={isLoggedIn}
            component={Chat}
          />

          <PriveteRouter
            exact
            path="/perfil"
            isAuthenticated={isLoggedIn}
            component={PerfilUsuario}
          />

          <Redirect to="/" />
        </Switch>
      </div>
      <VerFooter />
    </Router>
  );
};

export default AppRoute;
