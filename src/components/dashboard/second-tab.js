import React, { Component } from "react"

import EventItem from "./components/event-item"
import TextClick from "./components/text-click"
import { agenda, feedback, notes } from "./helpers"

export default class SecondTab extends Component {
  renderEventItem = () => {
    return agenda.events.map((ev, index) => <EventItem key={index} {...ev} />)
  };
  render() {
    return (
      <div className="second-tab md-grid">
        <div className="side-section md-cell md-cell--6">
          <div className="bloc agenda">
            <div className="bloc-header">
              <div className="bloc-title">{agenda.title}</div>
              <div className="bloc-description">{agenda.description}</div>
            </div>
            <div className="bloc-content">{this.renderEventItem()}</div>
          </div>
        </div>
        <div className="side-section md-cell md-cell--6">
          <div className="bloc feedback">
            <div className="bloc-header">
              <div className="bloc-title">{feedback.title}</div>
              <div className="bloc-description">{feedback.description}</div>
            </div>
            <div className="bloc-content">
              <TextClick />
            </div>
          </div>
          <div className="bloc notes">
            <div className="bloc-header">
              <div className="bloc-title">{notes.title}</div>
            </div>
            <div className="bloc-content">
              <TextClick />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
