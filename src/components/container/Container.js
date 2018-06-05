import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Button } from "react-md";

import * as routes from "libs/constants/routes";
import TopBar from "../top-bar";
import Counter from "../counter/Counter";
import Dashboard from "../dashboard";
import Aquarium from "../aquarium";
import Search from "../search";

import "./Container.scss";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { sideBarIsTrue: true };
  }
  toggleSideBar = isTrue => {
    this.setState({ sideBarIsTrue: !isTrue });
  };
  render() {
    const { sideBarIsTrue } = this.state;
    return (
      <div className="App-container">
        <TopBar />
        <div className="container">
          <div
            className={`${
              sideBarIsTrue ? "sideBarOut sideBar" : "sideBarIn sideBar"
            } `}
          >
            sideBar
          </div>
          <div
            className={`${
              sideBarIsTrue ? "sideBarOut content" : "sideBarIn content"
            } `}
          >
            <Button flat onClick={() => this.toggleSideBar(sideBarIsTrue)}>
              bt
            </Button>
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
    );
  }
}
