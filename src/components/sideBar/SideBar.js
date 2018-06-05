import React, { Component } from "react";
import { LinearProgress, Avatar, Button } from "react-md";

import Logo from "images/logo.png";

import "./SideBar.scss";

//todo proptype with action information and Edit
export default class SideBar extends Component {
  render() {
    const {
      profileName,
      skillsName,
      tel,
      Email,
      social,
      badget,
      grade,
      ProgressBar: { level, indicatorMax, indicatorMin }
    } = this.props.data;
    const { logout } = this.props;
    const socialLocal = social.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    const badgetLocal = badget.map((item, i) => {
      return (
        <Avatar key={i} className="SideBar-budges-avatar">
          {" "}
          {item}
        </Avatar>
      );
    });
    return (
      <div className="SideBar">
        <div className="SideBar-header">
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
          <LinearProgress
            id="progress-style-example"
            value={level}
            query
            className="horizontale-progress"
            // style={{ height: 100, width: 20 }}
            //progressClassName="horizontale-progress"
            progressStyle={value => ({ top: `${100 - value}%`, width: "100%" })}
          />
          <div className="LinearProgress-details">
            <span>{indicatorMin}</span>
            <span>{indicatorMax}</span>
          </div>
        </div>
        <div className="SideBar-body">
          <ul className="socialLink">{socialLocal}</ul>
          <div className="budges">
            <div className="budges-header">Badges</div>
            {badgetLocal}
          </div>
          <div className="grade">Grade</div>
          <p>{grade}</p>
        </div>
        <div className="SideBar-footer">
          <Button flat iconBefore={false} iconClassName="mdi mdi-pencil">
            Edit Profil
          </Button>
          <Button flat iconBefore={false} iconClassName="mdi mdi-information">
            Information
          </Button>
          <Button
            onClick={logout}
            flat
            iconBefore={false}
            iconClassName="mdi mdi-home"
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }
}
