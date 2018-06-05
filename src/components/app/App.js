import React, { Component } from "react"
import GeneralErrorBoundary from "components/general-error-boundary"
import { withRouter } from "react-router"
import { Switch, Route, Redirect } from "react-router-dom"

import * as routes from "libs/constants/routes"

import SignIn from "../auth/signIn"
import SignUp from "../auth/signUp"
import Container from "../container"
//import logo from "./logo.svg";
import "./App.scss"

@withRouter
class App extends Component {
  render() {
    return (
      <GeneralErrorBoundary>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={routes.SIGN_IN} />}
            />
            <Route exact path={routes.SIGN_IN} component={SignIn} />
            <Route exact path={routes.SIGN_UP} component={SignUp} />
            <Route path={routes.Container} component={Container} />
          </Switch>
        </div>
      </GeneralErrorBoundary>
    )
  }
}

export default App
