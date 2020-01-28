import React, { Component } from "react";
import { createUser } from "../Redux/userAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state.username, this.state.password);
    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    return (
      <div>
        <h2>Create new User</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-group border bg-light m-2 w-50 m-auto p-2 text-left"
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            maxLength="20"
            onChange={this.handleChange}
            value={this.state.username}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            maxLength="20"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit" className="btn btn-primary p-2 m-2 btn-block">
            Create New User
          </button>
        </form>
        <Link to="/admin">
          <button className="btn btn-primary">Admin Page</button>
        </Link>
      </div>
    );
  }
}

export default connect(null, { createUser })(CreateUser);
