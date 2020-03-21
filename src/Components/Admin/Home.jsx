import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <Link to="/create_user">Create user</Link>
        {/* print current open tickets */}
        <h2>Open Issues</h2>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Ticket Raise by</th>
              <th>Issue Name</th>
              <th>Issue description</th>
              <th>Current status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tickets.map(ele => {
              return (
                <tr key={ele.owner + ele.name}>
                  <td>{ele.owner}</td>
                  <td>{ele.name}</td>
                  <td>{ele.content}</td>
                  <td>open</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = state => {
  return {
    tickets: [...state.ticketReducer.tickets]
  };
};

export default connect(mapState)(Home);
