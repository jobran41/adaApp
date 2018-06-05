import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import * as routes from "libs/constants/routes"
import TopBar from "../top-bar"
import Counter from "../counter/Counter"
import Dashboard from "../dashboard"
import Aquarium from "../aquarium"
import Search from "../search"

export default class Container extends Component {
  render() {
    return (
      <div className="Container">
        <TopBar />
        <div className="App-container">
          <div className="sideBar">sideBar</div>
          <div className="content">
            <Switch>
              <Route
                exact
                path={routes.Container}
                render={() => (
                  <Redirect to={`${routes.Container}${routes.Dashboard}`} />
                )}
              />
              <Route exact path={routes.Counter} component={Counter} />
              <Route
                exact
                path={`${routes.Container}${routes.Dashboard}`}
                component={Dashboard}
              />
              <Route
                exact
                path={`${routes.Container}${routes.Aquarium}`}
                component={Aquarium}
              />
              <Route
                exact
                path={`${routes.Container}${routes.Form}`}
                component={Dashboard}
              />
              <Route
                exact
                path={`${routes.Container}${routes.Lab}`}
                component={Dashboard}
              />
              <Route
                exact
                path={`${routes.Container}${routes.Search}`}
                component={Search}
              />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
