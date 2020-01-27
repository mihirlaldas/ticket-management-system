import React, { Component } from "react";
import Login from "../Common/Login";
import { adminAuth } from "../Redux/adminAction";
import { connect } from "react-redux";
export class AdminLogin extends Component {
  constructor(props) {
    super(props);
  }
  // auth = (username, password) => {
  //   console.log(username, password);
  //   this.props.adminAuth(username, password);
  // };

  render() {
    return (
      <div>
        {this.props.type === "admin" ? (
          <Login auth={this.props.adminAuth} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    adminAuth: (username, password) => dispatch(adminAuth(username, password))
  };
};

export default connect(null, mapDispatchToProps)(AdminLogin);
