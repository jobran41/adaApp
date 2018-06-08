import React, { Component } from "react"
import { Button } from "react-md"
import img from "images/image2.jpg"

import "./lesson-item.scss"

export default class LessonItem extends Component {
  render() {
    const { title, description } = this.props
    return (
      <div className="lesson-item md-cell md-cell--4 md-cell--12-tablet">
        <div className="imgwapper"><img alt="" src={img} /></div>
        <div className="info-details">
          <div className="info-details-title">{title}</div>
          <div className="info-details-description">{description}</div>
          <Button icon iconClassName="mdi mdi-telegram"  className="card-button"/>
        </div>
      </div>
    )
  }
}
