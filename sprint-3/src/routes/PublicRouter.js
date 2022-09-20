import React from "react";
import Prototype from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PublicRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
         
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PublicRouter.prototype = {
  isAuthenticated: Prototype.bool.isRequired,
  component: Prototype.func.isRequired,
};

export default PublicRouter;