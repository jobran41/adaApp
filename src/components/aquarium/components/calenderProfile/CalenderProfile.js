import React, { Component } from 'react'
import { Avatar, Paper } from 'react-md'
import Calendar from "rc-calendar"

//import Logo from "images/logo.png"

import "rc-calendar/assets/index.css"
import './CalenderProfile.scss'


export default class Instructor extends Component {
    constructor(props) {
        super(props)
        this.state = { dataLocal: this.props.data }
    }
    render() {
        const {
            profileName,
            skillsName,
            tel,
            Email,
            className,
        } = this.props.data
        return (
            <Paper
                zDepth={1}
                className={`papers__panel CalenderProfile md-cell md-cell--6 ${className}`}
            >
                <div className="CalenderProfileHeader">
                        <Avatar className="CalenderProfileHeader-avatar" src="http://i.pravatar.cc/150?img=51" />
                    <div className="CalenderProfileHeader-header-description">
                        <h5>{profileName}</h5>
                        <span>{skillsName}</span>
                        <p className="tel">{tel}</p>
                        <p className="Email">{Email}</p>
                    </div>
                </div>
                <div className="PanelBody">
                    <Calendar
                        className="Instructor-CalendarComponent"
                        onSelect={this.onStandaloneSelect}
                    />
                </div>

            </Paper>
        )
    }
}
