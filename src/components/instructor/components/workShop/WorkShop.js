import React, { Component } from 'react'
import { Button } from 'react-md'
import Panel from 'components/panel'

import './WorkShop.scss'

export default class Aquarium extends Component {
    constructor(props) {
        super(props)
        this.state = { dataLocal: this.props.data }
    }

    renderList = () => {
        const { dataLocal } = this.state
        if (Array.isArray(dataLocal)) {
            const d = dataLocal.map((item, i) => {
                return (<div className="WorkShopList" key={i}>
                    <div className="task">{item.task}</div>
                    <div className="date">{item.date}</div>
                    <div className="tag">{item.tag}</div>
                    <div className="Button">
                        <Button icon iconBefore={false} iconClassName={`mdi mdi-bell`} />
                        <Button icon iconBefore={false} iconClassName={`mdi mdi-plus-circle`} />
                    </div>
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
            task: "lorem ipsume3",
            date: "11 april 11:10",
            tag: "#php",

        }, )
        this.setState({ dataLocal })
    }
    render() {
        return (
            <Panel
                title="Aquarium"
            >
                {this.renderList()}
                <Button flat onClick={this.addMore} className="panelbutton">Browes More</Button>
            </Panel >
        )
    }
}
