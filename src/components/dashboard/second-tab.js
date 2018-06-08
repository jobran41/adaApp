import React, { Component } from "react"

import EventItem from "./components/event-item"
import { agenda, feedback } from "./helpers"

export default class SecondTab extends Component {
  renderEventItem = () => {
    return agenda.events.map((ev, index) => <EventItem key={index} {...ev} />)
  };
  render() {
    return (
      <div className="second-tab">
        <div className="bloc agenda">
          <div className="bloc-header">
            <div className="bloc-title">{agenda.title}</div>
            <div className="bloc-description">{agenda.description}</div>
          </div>
          <div className="bloc-content">{this.renderEventItem()}</div>
        </div>
      </div>
    )
  }
}
