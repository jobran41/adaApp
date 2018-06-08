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
            icon
            className="switchView"
            onClick={() => this.setState({ switchView: "text" })}
          >
            view_list
          </Button>
        </div>
        <div
          className={cx("text-click-text", { hidden: switchView !== "text" })}
        >
          <TextField
            id="autoresizing-2"
            label="Multiline text field"
            placeholder="Some placeholder"
            rows={5}
          />
          <Button raised className="submit">
            Submit
          </Button>
        </div>
      </div>
    )
  }
}
