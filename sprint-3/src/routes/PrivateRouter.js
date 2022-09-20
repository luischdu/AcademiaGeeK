import React from "react";
import Prototype from "prop-types";
import { Route, Redirect } from "react-router-dom";

const PriveteRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PriveteRouter.prototype = {
  isAuthenticated: Prototype.bool.isRequired,
  component: Prototype.func.isRequired,
};

export default PriveteRouter;