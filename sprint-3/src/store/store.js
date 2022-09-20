import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducer/authReducer";
import { registro } from "../reducer/uiRefucer";
import { movieReducer } from "../reducer/movieReducer";
import { movieTrailer } from "../reducer/movieTrailer";

const reducers = combineReducers({
  auth: authReducer,
  ui: registro,
  movie: movieReducer,
  trailer: movieTrailer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
