import React, { Component } from "react"

import { expertise, skills, logs } from "./helpers"
import SkillItem from "./components/skill-item"
import Radar from "./charts/radar"
import Bar from "./charts/bar"

export default class ThirdTab extends Component {
  renderSkills = () => {
    return expertise.skills.map((sk, index) => {
      return <SkillItem key={index} {...sk} />
    })
  };
  render() {
    return (
      <div className="third-tab md-grid">
        <div className="bloc-section md-cell md-cell--4">
          <div className="bloc expertise">
            <div className="bloc-header">
              <div className="bloc-title">{expertise.title}</div>
              <div className="bloc-description">{expertise.description}</div>
            </div>
            <div className="bloc-content">{this.renderSkills()}</div>
          </div>
        </div>
        <div className="bloc-section md-cell md-cell--4">
          <div className="bloc skills">
            <div className="bloc-header">
              <div className="bloc-title">{skills.title}</div>
              <div className="bloc-description">{skills.description}</div>
            </div>
            <div className="bloc-content">
              <Radar options={skills.options} />
            </div>
          </div>
        </div>
        <div className="bloc-section md-cell md-cell--4">
          <div className="bloc logs">
            <div className="bloc-header">
              <div className="bloc-title">{logs.title}</div>
              <div className="bloc-description">{logs.description}</div>
            </div>
            <div className="bloc-content">
              <Bar options={logs.options} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
