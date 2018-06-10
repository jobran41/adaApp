import React, { Component } from "react"
import { LinearProgress } from "react-md"

import "./skill-item.scss"

export default class SkillItem extends Component {
  render() {
    const { name, progress } = this.props
    return (
      <div className="skill-item">
        <div className="skill-item-name">{name}</div>
        <LinearProgress id="SkillItem-LinearProgress" value={progress} />
        <div className="skill-item-progress">{progress}%</div>
      </div>
    )
  }
}
