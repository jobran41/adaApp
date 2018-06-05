import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as routes from "libs/constants/routes";

const Navigation = ({ authUser }) => (
  <div className="Navigation">
    {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={`${routes.Container}${routes.Dashboard}`}>Dashboard</Link>
    </li>
    <li>
      <Link to={`${routes.Container}${routes.Aquarium}`}>Aquarium</Link>
    </li>
    <li>
      <Link to={`${routes.Container}${routes.Form}`}>Form</Link>
    </li>
    <li>
      <Link to={`${routes.Container}${routes.Lab}`}>Lab</Link>
    </li>
    <li>
      <Link to={`${routes.Container}${routes.Search}`}>Search</Link>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

const mapStateToProps = state => ({
  authUser: state.userState.users
});

export default connect(mapStateToProps)(Navigation);
