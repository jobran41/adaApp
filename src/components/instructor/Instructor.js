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
            <div className="Instructor">
                <StudentsList data={dataSideBar} />
                <div className="rightContent">
                    <Calendar
                        className="Instructor-CalendarComponent"
                        onSelect={this.onStandaloneSelect}
                    />
                    <WorkShopList data={dataWorkShop} />
                </div>
            </div>
        )
    }
}



