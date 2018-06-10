import React, { Component } from "react"
import { TextField, FontIcon } from "react-md"

import { lessons } from "./helpers"
import LessonItem from "./components/lesson-item"

import './search.scss'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordSearch: ""
    }
  }
  searchLessons = () => {
    //const { wordSearch } = this.state
    return lessons.map((ls, index) => <LessonItem key={index} {...ls} />)
  };
  render() {
    const { wordSearch } = this.state
    return (
      <div className="md-cell md-cell--10 search">
        <TextField
          placeholder="Search"
          id="Search-TextField"
          rightIcon={<FontIcon>search</FontIcon>}
          block
          type="search"
          value={wordSearch}
          className="search-field"
          onChange={v => this.setState({ wordSearch: v })}
        />
        <div className="lessons-grid md-grid">{this.searchLessons()}</div>
      </div>
    )
  }
}
