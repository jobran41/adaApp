import React, { Component } from 'react'
import { Paper, Avatar, TextField, Button } from 'react-md'

import Logo from "images/logo.png"

export default class LiveSession extends Component {
    render() {
        return (
            <Paper
                zDepth={1}
            >
                <div className="LiveSession">
                    <div className="sommaire">
                        <Avatar className="SideBar-avatar" src={Logo} />
                        <ul>
                            <li>1. build app</li>
                            <li>2. bootstraper app</li>
                            <li>3. build app</li>
                            <li>4. build app</li>
                            <li>5. build app</li>
                            <li>6. build app</li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="titleDetail">
                            <h4>Lorem ipsume</h4>
                            <span>#css,#html</span>
                        </div>
                        <div className="coloboratorDetail">
                            <span>12 april 12:10</span>
                            <div className="liveAvatar">
                                <Avatar className="SideBar-avatar" src={Logo} />
                                <Avatar className="SideBar-avatar" src={Logo} />
                                <Avatar className="SideBar-avatar" src={Logo} />
                            </div>
                        </div>
                        <div className="rightDescription">
                            <div className="liveAvatar">
                                <TextField
                                    id="placeholder-only-password"
                                    placeholder="Enter your password"
                                    type="password"
                                    className="md-cell md-cell--bottom"
                                />
                                <Button flat >Clone</Button>
                            </div>
                        </div>
                        <div className="rightContent">
                            <h3>big skills</h3>
                            <p>loremmmm</p>
                        </div>
                    </div>
                </div>

            </Paper>
        )
    }
}
