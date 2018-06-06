import React, { Component } from 'react'
import { Avatar, Paper } from 'react-md'
import Calendar from "rc-calendar"

import Logo from "images/logo.png"

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
                className={`papers__panel ${className}`}
            >
                <div className="PanelHeader">
                    <div className="SideBar-header-info">
                        <div className="SideBar-header-avatar">
                            <Avatar className="SideBar-avatar" src={Logo} />
                        </div>
                        <div className="SideBar-header-description">
                            <h5>{profileName}</h5>
                            <span>{skillsName}</span>
                            <p className="tel">{tel}</p>
                            <p className="Email">{Email}</p>
                        </div>
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
