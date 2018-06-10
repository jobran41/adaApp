import React, { Component } from 'react'
import { Paper, Button } from 'react-md'

import './Panel.scss'

export default class Panel extends Component {

    render() {
        const { className, title, subTitle, widthProps, iconButton } = this.props
        const widthLocal = Number(widthProps)
        return (
            <Paper
                zDepth={1}
                className={`papers__panel ${className}`}
                style={{ width: widthProps ? widthLocal : 'auto' }}
            >
                <div className="PanelHeader">
                    <div className="PanelHeader-title">
                        <h4> {title} </h4>
                        <h5> {subTitle} </h5>
                    </div>
                    {iconButton && <div className="PanelHeader-icon">
                        <Button icon iconBefore={false} >{iconButton}</Button>
                    </div>}

                </div>
                <div className="PanelBody">
                    {this.props.children}
                </div>

            </Paper>
        )
    }
}
