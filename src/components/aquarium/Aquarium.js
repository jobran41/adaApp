import React, { Component } from 'react'


import CalenderProfile from './components/calenderProfile'
import InstructorList from './components/instructor'
import { dataInstructor } from './components/instructor/helpers'
import { dataProfile } from './components/calenderProfile/helpers'



import "./Aquarium.scss"

export default class Aquarium extends Component {
  render() {
    return (
      <div className="Aquarium">
        <InstructorList data={dataInstructor} />
        <CalenderProfile data={dataProfile} />
      </div>
    )
  }
}