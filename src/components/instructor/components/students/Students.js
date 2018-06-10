import React, { Component } from 'react'
import { Avatar, Button } from 'react-md'
import Panel from 'components/panel'

import './Students.scss'

export default class Students extends Component {
    constructor(props) {
        super(props)
        this.state = { dataLocal: this.props.data }
    }

    renderList = () => {
        const { dataLocal } = this.state
        if (Array.isArray(dataLocal)) {
            const d = dataLocal.map((item, i) => {
                return (<div className="StudentsList" key={i}>
                    <Avatar key={i} random>
                        {item.profileName.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="profileName">{item.profileName}</div>
                    <div className="skillsName">{item.skillsName}</div>
                    <div className="skillsCount">{item.skillsCount}</div>
                    <div className="Button"> <Button icon iconBefore={false} iconClassName={`mdi mdi-eye`} /></div>
                </div>)
            })
            return d
        } else {
            return <div />
        }
    }
    addMore = () => {
        const { dataLocal } = this.state
        dataLocal.push({
            profileName: "Instructor Name3",
            skillsName: "Game Instructor3",
            skillsCount: "30",

        })
        this.setState({ dataLocal })
    }
    render() {
        return (
            <Panel
                title="Mes Students List"
                subTitle="See All Student"
                className="md-cell md-cell--6"
                iconButton="more_horiz"
            >
                {this.renderList()}
                <Button flat onClick={this.addMore} className="panelbutton">Browes More</Button>
            </Panel >
        )
    }
}
