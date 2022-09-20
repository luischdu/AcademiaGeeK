import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { firebase } from "../firebase/config";
import { login } from "../action/auth";
import { useDispatch } from "react-redux";
import Home from "../components/Home.js";
import Login from "../components/Login.js";
import NotPopular from "../components/NotPopular.js";
import Perfil from "../components/Perfil.js";
import Popular from "../components/Popular.js";
import Register from "../components/Register.js";
import Navbar from "../pages/Navbar.jsx";
import PriveteRouter from "./PrivateRouter.js";
import PublicRouter from "./PublicRouter.js";
import Search from "../components/Search";

const AppRoute = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking]);

  if (checking) {
    return (
      <div className="row  ">
        <div className="col-12 text-center  ">
          <div class="spinner-border text-warning justify-content-center" role="status"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Home} />
        <Route exact path="/top-movies" component={Popular} />
        <Route exact path="/less-movies" component={NotPopular} />
        <Route exact path="/search" component={Search} />

        <PublicRouter
          exact
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}
        />
        <PublicRouter
          exact
          path="/register"
          component={Register}
          isAuthenticated={isLoggedIn}
        />
        <PriveteRouter
          exact
          path="/profile"
          isAuthenticated={isLoggedIn}
          component={Perfil}
        />

        <Redirect to="/movies" />
      </Switch>
    </Router>
  );
};

export default AppRoute;
