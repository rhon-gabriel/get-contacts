import { createStore } from "redux";
import rootReducer from "./rootReducer";
import "regenerator-runtime/runtime";

const store = createStore(rootReducer);

export default store;
