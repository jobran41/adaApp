import React, { Component } from 'react'
import { Paper, Avatar, TextField, Button } from 'react-md'

import sommaireImage from "images/image3.jpg"

import "./DetailSession.scss"

export default class LiveSession extends Component {
    render() {
        return (
            <Paper
                zDepth={1}
                className="LiveSession md-cell md-cell--12"
            >
                <div className="LiveSession-sommaire">
                    <div className="sommaire-Image-wapper">
                        <img className="sommaire-Image" alt="" src={sommaireImage} />
                    </div>
                    <ol>
                        <li>build app</li>
                        <li>bootstraper app</li>
                        <li>build app</li>
                        <li>build app</li>
                        <li>build app</li>
                        <li>build app</li>
                    </ol>
                </div>
                <div className="LiveSession-content">
                    <div className="titleDetail">
                        <div className="">
                            <h4>Lorem ipsume</h4>
                            <span>#css,#html</span>
                        </div>
                        <Button className="CalenderProfileHeader-header-button" onClick={this.props.onBackCard} icon iconBefore={false} iconClassName={`mdi mdi-arrow-right-bold-circle-outline`} />
                    </div>
                    <div className="coloboratorDetail">
                        <span><b>12 april</b> 12:10</span>
                        <div className="liveAvatar">
                            <Avatar src="http://i.pravatar.cc/150?img=51" />
                            <Avatar src="http://i.pravatar.cc/150?img=52" />
                            <Avatar src="http://i.pravatar.cc/150?img=53" />
                        </div>
                    </div>
                    <div className="rightDescription">
                        <TextField
                            id="placeholder-only-password"
                            placeholder="Enter your password"
                            type="password"
                            className="password-field"
                        />
                        <Button flat className="password-button">Clone</Button>
                    </div>
                    <div className="LiveSession-rightContent">
                        <h3>big skills</h3>
                        <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare.</p>
                        <p>Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo quoque accedente quod et nomenclatores adsueti haec et talia venditare.</p>
                    </div>
                    <div className="LiveSession-note">
                        <h3>note</h3>
                        <p>Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii montis illius celsi praetermeans funditur in Parthenium mare.</p>
                    </div>
                </div>

            </Paper>
        )
    }
}
