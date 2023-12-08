import { createStore } from "redux";
import { rootReducer } from "./reducers";

// const reducers = combineReducers({ authReducer, menuReducer }); //menggabungkan 2 reducers

const store = createStore(rootReducer); //ini awal mulanya

export default store;
