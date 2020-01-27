import React, { Component } from "react";
import { raiseTicket, seeTickets } from "../Redux/ticketAction";
import { connect } from "react-redux";
export class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postName: "",
      post: "",
      owner: this.props.currentUser
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.raiseTicket(
      this.state.postName,
      this.state.post,
      this.state.owner
    );
    this.setState({
      post: "",
      postName: ""
    });
  };
  render() {
    console.log(this.props.tickets);

    return (
      <div>
        <h1>Hello Dear {this.state.owner}</h1>
        <h2>Raise a Ticket</h2>
        <form
          onSubmit={this.handleSubmit}
          className="form-group border bg-light m-2 w-50 m-auto p-2 text-left"
        >
          <label htmlFor="name">Enter Issue name</label>
          <input
            type="text"
            value={this.state.postName}
            onChange={e => this.setState({ postName: e.target.value })}
            className="form-control"
            name="name"
            placeholder="enter post name"
          />
          <label htmlFor="post">Enter ticket details</label>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
            className="form-control"
            placeholder="Enter ticket description"
            name="post"
          />
          <button className="btn btn-primary p-2 m-2 btn-block" type="submit">
            Submit Issue
          </button>
        </form>
        {/* print current open tickets */}
        <h2>Open Issues</h2>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Issue Name</th>
              <th>Issue description</th>
              <th>Current status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tickets.map(ele => {
              // if (ele.owner === this.state.owner && ele.isOpen)
              return (
                <tr key={ele.owner + ele.name}>
                  <td>{ele.name}</td>
                  <td>{ele.content}</td>
                  <td>open</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {console.log(this.props.tickets)}
      </div>
    );
  }
}

const mapState = state => {
  return {
    currentUser: state.userReducer.currentUser,
    tickets: [...state.ticketReducer.tickets]
  };
};

export default connect(mapState, { raiseTicket, seeTickets })(UserHome);
