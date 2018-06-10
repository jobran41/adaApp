import React, { Component } from "react"
import PropTypes from "prop-types"
import { LinearProgress, Avatar, Button } from "react-md"
import * as cookies from "tiny-cookie"
import { withRouter } from "react-router-dom"

import "./SideBar.scss"

@withRouter
class SideBar extends Component {
  logout = () => {
    const { history } = this.props
    cookies.remove("login")
    history.push("/")
  };
  renderBadge = () => {
    const { badget } = this.props.data
    if (Array.isArray(badget)) {
      let badgetLocal = badget.map((item, i) => {
        return (
          <Avatar key={i} className="SideBar-budges-avatar">
            {" "}
            {item}
          </Avatar>
        )
      })
      return badgetLocal
    } else {
      return []
    }
  };

  renderSocial = () => {
    const { social } = this.props.data
    if (Array.isArray(social)) {
      let socialLocal = social.map((item, i) => {
        return <li key={i}>{item}</li>
      })
      return socialLocal
    } else {
      return []
    }
  };

  isEmptyObject = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  };
  render() {
    const {
      profileName,
      adress,
      tel,
      Email,
      grade,
      ProgressBar: { level, indicatorMax, indicatorMin }
    } = this.props.data
    return (
      <div className="SideBar">
        <div className="SideBar-header">
          <div className="SideBar-header-info">
            <div className="SideBar-header-avatar">
              <Avatar
                className="SideBar-avatar"
                src="http://i.pravatar.cc/150?img=11"
              />
            </div>
            <div className="SideBar-header-description">
              <h5>{profileName}</h5>
              <span>{adress}</span>
              <p className="tel">{tel}</p>
              <p className="Email">{Email}</p>
            </div>
          </div>
          {!this.isEmptyObject(this.props.data.ProgressBar) &&
            typeof this.props.data.ProgressBar === "object" && (
              <div className="skillProgress">
                <LinearProgress
                  value={level || 0}
                  id="SideBar-LinearProgress"
                // style={{ height: 100, width: 20 }}
                //progressClassName="horizontale-progress"
                //progressStyle={value => ({ top: `${100 - value}%`, width: "100%" })}
                />
                <div className="LinearProgress-details">
                  <span>{indicatorMin} % Skills</span>
                  <span>{indicatorMax} %</span>
                </div>
              </div>
            )}
        </div>
        <div className="SideBar-body">
          <ul className="SideBar-block socialLink">{this.renderSocial()}</ul>
          <hr />
          <div className="SideBar-block budges">
            <div className="budges-header">Badges</div>
            <div className="budges-container">{this.renderBadge()}</div>
          </div>
          <hr />
          <div className="SideBar-block grade">
            <h5>Grade</h5>
            <p>{grade}</p>
          </div>
          <hr />
        </div>
        <div className="SideBar-footer">
          <Button flat iconBefore={false} iconClassName="mdi mdi-pencil">
            Edit Profil
          </Button>
          <Button flat iconBefore={false} iconClassName="mdi mdi-information">
            Information
          </Button>
          <Button
            onClick={this.logout}
            flat
            iconBefore={false}
            iconClassName="mdi mdi-home"
          >
            Logout
          </Button>
        </div>
      </div>
    )
  }
}

SideBar.propTypes = {
  ProgressBar: PropTypes.object,
  logout: PropTypes.func,
  profileName: PropTypes.string,
  skillsName: PropTypes.string,
  Email: PropTypes.string,
  social: PropTypes.array,
  badget: PropTypes.array
}

export default SideBar
