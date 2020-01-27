export const ADMIN_AUTH = "ADMIN_AUTH";

export const adminAuth = (username, password) => {
  return {
    type: ADMIN_AUTH,
    payload: { username: username, password: password }
  };
};

export default { ADMIN_AUTH, adminAuth };
