export const USER_AUTH = "USER_AUTH";
export const CREATE_USER = "CREATE_USER";

export const userAuth = (username, password) => {
  console.log("user Auth called", username, password);
  return {
    type: USER_AUTH,
    payload: { username: username, password: password }
  };
};

export const createUser = (username, password) => {
  return {
    type: CREATE_USER,
    payload: { username: username, password }
  };
};

export default {
  USER_AUTH,
  userAuth,
  CREATE_USER,
  createUser
};
