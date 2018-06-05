import React from "react"
import Error from "./Error"

export default class GenerallErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <Error />
    } else {
      return this.props.children
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
}
