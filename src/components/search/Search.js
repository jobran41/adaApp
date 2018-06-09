import React, { Component } from "react"
import { TextField, FontIcon } from "react-md"

import { lessons } from "./helpers"
import LessonItem from "./components/lesson-item"

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordSearch: ""
    }
  }
  searchLessons = () => {
    return lessons.map((ls, index) => <LessonItem key={index} {...ls} />)
  };
  render() {
    const { wordSearch } = this.state
    return (
      <div className="search">
        <TextField
          id="phone-number-with-icon-right"
          label="Phone"
          type="tel"
          rightIcon={<FontIcon>phone</FontIcon>}
          size={10}
          fullWidth
          value={wordSearch}
          onChange={v => this.setState({ wordSearch: v })}
        />
        <div className="lessons-grid">{this.searchLessons()}</div>
      </div>
    )
  }
}
