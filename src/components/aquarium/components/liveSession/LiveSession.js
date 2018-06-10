
import React, { Component } from 'react'
import { Avatar, Button } from 'react-md'
import Panel from 'components/panel'

import './LiveSession.scss'

export default class LiveSession extends Component {
    constructor(props) {
        super(props)
        this.state = { dataLocal: this.props.data }
    }

    renderList = () => {
        const { dataLocal } = this.state
        if (Array.isArray(dataLocal)) {
            const d = dataLocal.map((item, i) => {
                return (
                    <div className="WorkShopList"
                        key={i}
                        onClick={() => this.props.selectLiveSession(item)}
                    >
                        <div className="task">{item.task}</div>
                        <div className="date">{item.date}</div>
                        <div className="avatart">
                            <Avatar key={i + 1} >
                                {item.task.charAt(0).toUpperCase()}
                            </Avatar>
                            <Avatar key={i + 2} >
                                {item.task.charAt(0).toUpperCase()}
                            </Avatar>
                        </div>
                        <div className="Button">
                            <Button icon iconBefore={false} iconClassName={`mdi mdi-plus-circle`} />
                        </div>
                    </div>)
            })
            return d
        } else {
            return <div />
        }
    }
    render() {
        return (
            <Panel
                title="Upcoming live Session"
                subTitle="See All live session"
                className="md-cell md-cell--12"
                iconButton="more_horiz"
            >
                {this.renderList()}
                <Button flat className="panelbutton">See More</Button>
            </Panel >
        )
    }
}
