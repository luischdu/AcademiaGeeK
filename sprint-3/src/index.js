import React from "react";
import ReactDOM from "react-dom";
import AppRoute from "./routes/AppRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./style/style.css";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
