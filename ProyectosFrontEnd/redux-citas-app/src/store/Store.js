import { createStore } from "redux";
import reducers from "../reducers/";
import { obtenerSate, guardarStore } from "../localStorage/LocalStorage";

const storageState = obtenerSate();

const store = createStore(
  // Reducers
  reducers,

  // Storage state
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  guardarStore({
    citas: store.getState().citas,
  });
});

export default store;
