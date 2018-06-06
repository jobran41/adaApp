import React, { Component } from "react"

import StudentsList from 'components/list/students'
import { dataSideBar } from 'components/list/students/helpers'
export default class Dashboard extends Component {
  render() {
    return <div className="Dashboard" ><StudentsList data={dataSideBar} /></div>
  }
}
