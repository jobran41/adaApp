import React, { Component } from "react"
import { Button } from "react-md"
import img from "images/image4.jpg"

import "./lesson-item.scss"

export default class LessonItem extends Component {
  render() {
    const { title, description } = this.props
    return (
      <div className="lesson-item md-cell md-cell--3">
        <div className="imgwapper"><img alt="" src={img} /></div>
        <div className="info-details">
          <div className="info-details-title">{title}</div>
          <div className="info-details-description">{description}</div>
          <Button icon iconClassName="mdi mdi-plus-circle"  className="plus-button"/>
        </div>
      </div>
    )
  }
}
