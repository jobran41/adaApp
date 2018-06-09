import React, { Component } from 'react'
import Calendar from "rc-calendar"

import StudentsList from './components/students'
import WorkShopList from './components/workShop'
import { dataSideBar } from './components/students/helpers'
import { dataWorkShop } from './components/workShop/helpers'


import "rc-calendar/assets/index.css"
import "./Instructor.scss"

export default class Instructor extends Component {
    render() {
        return (
            <div className="md-cell md-cell--10 Instructor md-grid">
                <StudentsList data={dataSideBar} />
                <div className="rightContent md-cell md-cell--6">
                <div className="papers__panel CalenderProfile">
                    <Calendar
                        className="Instructor-CalendarComponent"
                        onSelect={this.onStandaloneSelect}
                    />
                </div>
                    <WorkShopList data={dataWorkShop} />
                </div>
            </div>
        )
    }
}



