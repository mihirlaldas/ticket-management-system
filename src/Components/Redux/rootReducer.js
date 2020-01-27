import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import ticketReducer from "./ticketReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  adminReducer,
  userReducer,
  ticketReducer
});

export default rootReducer;
