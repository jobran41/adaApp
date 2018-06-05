import React, { Component } from "react"
import { LinearProgress, Button } from "react-md"

export default class CardItem extends Component {
  renderHashtag = () => {
    const { hashtags } = this.props
    return hashtags.map(h => `#${h}`)
  };
  render() {
    const { title, progress, skillC, skillL } = this.props
    return (
      <div className="card-item">
        <div className="title">{title}</div>
        <div className="hashtag">{this.renderHashtag()}</div>
        <LinearProgress value={progress} />
        <div className="common-details">
          <div className="common-details-items">{progress}% progress</div>
          <div className="common-details-items">{skillC}% skills completed</div>
          <div className="common-details-items">{skillL}% skills left</div>
        </div>
        <Button flat primary iconChildren="chat_bubble_outline">
          Flight
        </Button>
      </div>
    )
  }
}
