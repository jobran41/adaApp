import React, { Component } from "react";
import GeneralErrorBoundary from "components/general-error-boundary";
import { withRouter } from "react-router";

import TopBar from "../top-bar";
import Counter from "../counter/Counter";
//import logo from "./logo.svg";
import "./App.scss";

@withRouter
class App extends Component {
  render() {
    return (
      <GeneralErrorBoundary>
        <div className="App">
          <TopBar />
          <Counter />
        </div>
      </GeneralErrorBoundary>
    );
  }
}

export default App;
