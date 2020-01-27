import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <Link to="/create_user">Create user</Link>
      </div>
    );
  }
}

export default Home;
