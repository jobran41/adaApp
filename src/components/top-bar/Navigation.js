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
        flat
        className="menuButton"
      >
        Dashboard
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Aquarium}`)}
        flat
        className="menuButton"
      >
        Aquarium
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Lab}`)}
        flat
        className="menuButton"
      >
        Lab
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Form}`)}
        flat
        className="menuButton"
      >
        Form
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Search}`)}
        flat
        className="menuButton"
      >
        Search
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Instructor}`)}
        flat
        className="menuButton"
      >
        Instructor
      </Button>
      <Button
        onClick={() => this.pushurl(`${routes.Container}${routes.Tuto}`)}
        flat
        className="menuButton"
      >
        Tuto
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
