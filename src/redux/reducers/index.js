import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { menuReducer } from "./menuReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  authReducer,
  menuReducer,
  userReducer,
});
