import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Admin/Home";
import NotFound from "../Common/NotFound";
import UserHome from "../User/UserHome";
import { connect } from "react-redux";
import Auth from "../Common/Auth";
import CreateUser from "../Admin/CreateUser";

function Routes(props) {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            props.userIsLoggedIn ? <UserHome /> : <Auth type="user" />
          }
        />
        <Route
          path="/admin"
          render={() =>
            props.adminIsLoggedIn ? <Home /> : <Auth type="admin" />
          }
        />
        <Route
          path="/create_user"
          render={() =>
            props.adminIsLoggedIn ? <CreateUser /> : <Auth type="admin" />
          }
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    adminIsLoggedIn: state.adminReducer.adminIsLoggedIn,
    userIsLoggedIn: state.userReducer.userIsLoggedIn
  };
};
export default connect(mapStateToProps)(Routes);
