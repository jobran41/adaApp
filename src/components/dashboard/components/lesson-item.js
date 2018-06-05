import React, { Component } from "react"
import { Button } from "react-md"

export default class LessonItem extends Component {
  render() {
    const { title, description } = this.props
    return (
      <div className="lesson-item">
        <img alt="" />
        <div className="info-details">
          <div className="info-details-title">{title}</div>
          <div className="info-details-description">{description}</div>
          <Button flat primary iconChildren="chat_bubble_outline">
            Flight
          </Button>
        </div>
      </div>
    )
  }
}
