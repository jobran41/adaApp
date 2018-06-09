import React, { Component } from "react"

import CardItem from "./components/card-item"
import LessonItem from "./components/lesson-item"
import img1 from "images/image1.jpg"
import { lesson, lessons } from "./helpers"
import { Button } from "react-md"

import "./Dashboard.scss"

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
      <div className="first-tab md-grid">
        <div className="top-position md-grid">
          <div className="img-left md-cell md-cell--4 md-cell--12-tablet" >
            <img alt="" src={ img1 } />
          </div>
          <div className="card-right md-cell md-cell--8 md-cell--12-tablet">
            <CardItem {...lesson} />
          </div>
        </div>
        <div className="bottom-position md-grid">
          <div className="gp-button">
            <Button
              icon
              className="switchView"
              onClick={() => this.switchView("cards")}
            >
              dashboard
            </Button>
            <Button
              icon
              className="switchView"
              onClick={() => this.switchView("tree")}
            >
              view_list
            </Button>
          </div>
          {view === "cards" && this.renderLessons()}
        </div>
      </div>
    )
  }
}
