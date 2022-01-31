import { combineReducers } from "redux";
import contactReducer from "../containers/Main/Contact/redux/reducer";

const rootReducer = combineReducers({
  contact: contactReducer,
});

export default rootReducer;
