import React, { Component } from "react"
import { Checkbox } from "react-md"
export default class EventItem extends Component {
  render() {
    const { createdAt, title, index, checked } = this.props
    return (
      <div className="event-item">
        <div className="event-item-date">
          <div className="event-item-day">{createdAt.day}</div>
          <div className="event-item-month">{createdAt.month}</div>
        </div>
        <div className="event-item-title">{title}</div>
        <div className="event-item-time">{createdAt.time}</div>
        <Checkbox
          aria-label=""
          id={`event-item-${index}`}
          name="checked[]"
          value={title}
          checked={checked}
          onChange={() => null}
        />
      </div>
    )
  }
}
