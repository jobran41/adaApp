import React, { Component } from "react"
import { Button, TextField } from "react-md"
import cx from "classnames"

import "./TextClick.scss"

export default class TextClick extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchView: "icon"
    }
  }
  render() {
    const { switchView } = this.state
    return (
      <div className="text-click">
        <div
          className={cx("text-click-icon", { hidden: switchView !== "icon" })}
        >
          <Button
            flat
            className="text-click-button"
            iconChildren="border_color"
            onClick={() => this.setState({ switchView: "text" })}
          >
            Click to write text
          </Button>
        </div>
        <div
          className={cx("text-click-text", { hidden: switchView !== "text" })}
        >
          <TextField
            id="autoresizing-2"
            label="Your text hier"
            rows={3}
          />
          <Button flat className="text-click-submit">
            Submit
          </Button>
        </div>
      </div>
    )
  }
}
