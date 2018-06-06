import React, { Component } from 'react'
import Calendar from "rc-calendar"

import StudentsList from 'components/list/students'
import AquariumList from 'components/list/aquarium'
import { dataSideBar } from 'components/list/students/helpers'
import { dataAquarium } from 'components/list/aquarium/helpers'

import "rc-calendar/assets/index.css"
import "./Instructor.scss"

export default class Instructor extends Component {
    render() {
        return (
            <div className="Instructor">
                <StudentsList data={dataSideBar} />
                <div className="cl">
                    <Calendar
                        className="Instructor-CalendarComponent"
                        onSelect={this.onStandaloneSelect}
                    />
                    <AquariumList data={dataAquarium} />
                </div>
            </div>
        )
    }
}



