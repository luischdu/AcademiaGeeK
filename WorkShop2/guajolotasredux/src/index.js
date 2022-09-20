import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./routes/AppRoutes";

import { GlobalStyle } from "./styles/Style";

import { Provider } from "react-redux";
import { store } from "./store/store";
import "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
