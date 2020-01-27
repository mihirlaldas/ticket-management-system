import React from "react";
import Login from "../Common/Login";
import { adminAuth } from "../Redux/adminAction";
import { userAuth } from "../Redux/userAction";
import { connect } from "react-redux";

function Auth(props) {
  switch (props.type) {
    case "admin":
      return <Login auth={props.adminAuth} type={props.type} />;
      break;
    case "user":
      return <Login auth={props.userAuth} type={props.type} />;
      break;
    default:
      return <div>Error</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adminAuth: (username, password) => dispatch(adminAuth(username, password)),
    userAuth: (username, password) => dispatch(userAuth(username, password))
  };
};

export default connect(null, mapDispatchToProps)(Auth);
