import { ADMIN_AUTH } from "./adminAction";

const initialState = {
  adminIsLoggedIn: false,
  adminCredentials: { username: "admin", password: "admin" }
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AUTH:
      if (
        action.payload.username === state.adminCredentials.username &&
        action.payload.password === state.adminCredentials.password
      )
        return {
          ...state,
          adminIsLoggedIn: true
        };
      else {
        alert("wrong Admin credentials!!");
        return state;
      }
      break;
    default:
      return state;
  }
};

export default adminReducer;
