import { USER_AUTH, CREATE_USER } from "../Redux/userAction";
const initialState = {
  userCredentials: [{ username: "mihir", password: "kumar" }],
  userIsLoggedIn: false,
  currentUser: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH:
      for (let i = 0; i < state.userCredentials.length; i++)
        if (
          state.userCredentials[i].username === action.payload.username &&
          state.userCredentials[i].password === action.payload.password
        )
          return {
            ...state,
            userIsLoggedIn: true,
            currentUser: action.payload.username
          };
      return state;
      break;
    case CREATE_USER:
      let isPresent = false;
      for (let i = 0; i < state.userCredentials.length; i++)
        if (
          state.userCredentials[i].username === action.payload.username &&
          state.userCredentials[i].password === action.payload.password
        ) {
          isPresent = true;
          break;
        }
      if (isPresent) {
        alert("!! User already present, please enter another user");
        return state;
      }
      return {
        ...state,
        userCredentials: [...state.userCredentials, { ...action.payload }]
      };
      break;
    default:
      return state;
  }
};
export default userReducer;
