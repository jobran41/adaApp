import React, { Component } from "react"
import GeneralErrorBoundary from "components/general-error-boundary"
import { withRouter } from "react-router"
import { Switch, Route, Redirect } from "react-router-dom"
import * as cookies from "tiny-cookie"

import * as routes from "libs/constants/routes"

import SignIn from "../auth/signIn"
import SignUp from "../auth/signUp"
import Forgetpassword from "../auth/forgetpassword"
import Container from "../container"

//import logo from "./logo.svg";
import "./App.scss"

@withRouter
class App extends Component {
  render() {
    const login = cookies.get("login")
    return (
      <GeneralErrorBoundary>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                if (login) {
                  return <Redirect to={routes.Container} />
                } else {
                  return <Redirect to={routes.SIGN_IN} />
                }
              }}
            />
            <Route exact path={routes.SIGN_IN} component={SignIn} />
            <Route exact path={routes.SIGN_UP} component={SignUp} />
            <Route exact path={routes.FORGET} component={Forgetpassword} />
            <Route
              path={routes.Container}
              render={() => {
                if (login) {
                  return <Container />
                } else {
                  return <Redirect to={routes.SIGN_IN} />
                }
              }}
            />
          </Switch>
        </div>
      </GeneralErrorBoundary>
    )
  }
}

export default App
