import { USER_AUTH, CREATE_USER } from "../Redux/userAction";
const initialState = {
  userCredentials: JSON.parse(localStorage.getItem("users")),
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
      localStorage.setItem(
        "users",
        JSON.stringify([...state.userCredentials, { ...action.payload }])
      );
      alert("New user created successfully");
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
