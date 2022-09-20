import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";
import { registro } from "../reducers/uiReducer";
import { notesReducer } from "../reducers/notesReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  auth: authReducer,
  ui: registro,
  notes: notesReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
