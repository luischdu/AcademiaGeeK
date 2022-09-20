import CitasReducer from "./CitasReducer";
import { combineReducers } from "redux";
import ValidarFormReducer from "./ValidarFormReducer";

export default combineReducers({
  citas: CitasReducer,
  error: ValidarFormReducer,
});
