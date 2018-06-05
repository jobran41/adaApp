import React, { Component } from "react"

import CardItem from "./components/card-item"
import LessonItem from "./components/lesson-item"
import { lesson, lessons } from "./helpers"
import { Button } from "react-md"

export default class FirstTab extends Component {
  state = {
    view: "cards"
  };
  renderLessons = () => {
    return lessons.map((l, index) => {
      return <LessonItem key={index} {...l} />
    })
  };
  switchView = view => {
    this.setState({ view })
  };
  render() {
    const { view } = this.state
    return (
      <div className="first-tab">
        <div className="top-position">
          <div className="img-left" />
          <div className="card-right">
            <CardItem {...lesson} />
          </div>
        </div>
        <div className="bottom-position">
          <div className="gp-button">
            <Button
              flat
              primary
              iconChildren="chat_bubble_outline"
              onClick={() => this.switchView("cards")}
            >
              Flight
            </Button>
            <Button
              flat
              primary
              iconChildren="chat_bubble_outline"
              onClick={() => this.switchView("tree")}
            >
              Flight
            </Button>
          </div>
          {view === "cards" && this.renderLessons()}
        </div>
      </div>
    )
  }
}
