import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { withRouter } from "react-router"
import { connect } from 'react-redux'

import * as routes from "libs/constants/routes"
import TopBar from "../top-bar"
import Counter from "../counter/Counter"
import Dashboard from "../dashboard"
import Aquarium from "../aquarium"
import Search from "../search"
import SideBar from "../sideBar"
import Instructor from "../instructor"
import { dataSideBar } from "../sideBar/helpers"
import Tutorial from "../tutorial"

import "./Container.scss"

@withRouter
@connect(({ app }) => ({
  sideBarIsTrue: app.topbarCollapsed
}))
export default class Container extends Component {

  toggleSideBar = isTrue => {
    this.setState({ sideBarIsTrue: !isTrue })
  };
  logout = () => {
    const { history } = this.props
    history.push("/")
  };
  render() {
    const { sideBarIsTrue } = this.props
    return (
      <div className="App-container">
        <TopBar />
        <div className="container">
          <div
            className={`${
              sideBarIsTrue ? "sideBarOut sideBar" : "sideBarIn sideBar"
              } `}
          >
            <SideBar data={dataSideBar} logout={this.logout} />
          </div>
          <div
            className={`${
              sideBarIsTrue ? "sideBarOut content" : "sideBarIn content"
              } `}
          >
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
              <Route
                exact
                path={`${routes.Container}${routes.Instructor}`}
                component={Instructor}
              />
              <Route
                exact
                path={`${routes.Container}${routes.Tuto}`}
                component={Tutorial}
              />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
