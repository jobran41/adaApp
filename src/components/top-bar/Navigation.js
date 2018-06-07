import { Button } from "react-md"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import * as routes from "libs/constants/routes"

import React, { Component } from "react"

@withRouter
@connect(({ userState }) => ({
  authUser: userState.users
}))
class Navigation extends Component {
  pushurl = url => {
    const { history } = this.props
    history.push(url)
  };
  NavigationAuth = () => (
    <div className="menu-withLogin">
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Dashboard}`)}
        raised
      >
        Dashboard
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Aquarium}`)}
        raised
      >
        Aquarium
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Lab}`)}
        raised
      >
        Lab
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Form}`)}
        raised
      >
        Form
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Search}`)}
        raised
      >
        Search
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Instructor}`)}
        raised
      >
        Instructor
      </Button>
    </div>
  );

  NavigationNonAuth = () => (
    <div className="menu-withoutLogin">
      <Button onClick={() => this.pushurl(`${routes.SIGN_IN}`)} raised>
        SIGN_IN
      </Button>
      <Button onClick={() => this.pushurl(`${routes.SIGN_UP}`)} raised>
        SIGN_UP
      </Button>
    </div>
  );
  render() {
    const { authUser } = this.props
    return (
      <div className="Navigation">
        {authUser ? this.NavigationAuth() : this.NavigationNonAuth()}
      </div>
    )
  }
}

export default Navigation
