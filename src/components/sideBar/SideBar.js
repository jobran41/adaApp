import React, { Component } from "react"
import PropTypes from "prop-types"
import { LinearProgress, Avatar, Button } from "react-md"

import Logo from "images/logo.png"

import "./SideBar.scss"

//todo proptype with action information and Edit
class SideBar extends Component {
  logout = () => {
    const { logout } = this.props
    if (typeof logout === 'function') {
      logout()
    }
  }
  renderBadge = () => {
    const {
      badget,
    } = this.props.data
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
  }

  renderSocial = () => {
    const {
      social,
    } = this.props.data
    if (Array.isArray(social)) {
      let socialLocal = social.map((item, i) => {
        return <li key={i}>{item}</li>
      })
      return socialLocal
    } else {
      return []
    }
  }

  isEmptyObject = (obj) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return false
    }
    return true
  }
  render() {
    const {
      profileName,
      skillsName,
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
              <Avatar className="SideBar-avatar" src={Logo} />
            </div>
            <div className="SideBar-header-description">
              <h5>{profileName}</h5>
              <span>{skillsName}</span>
              <p className="tel">{tel}</p>
              <p className="Email">{Email}</p>
            </div>
          </div>
          {!this.isEmptyObject(this.props.data.ProgressBar) && typeof this.props.data.ProgressBar === 'object' &&
            <div>
              <LinearProgress
                id="progress-style-example"
                value={level || 0}
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
          }
        </div>
        <div className="SideBar-body">
          <ul className="socialLink">{this.renderSocial()}</ul>
          <div className="budges">
            <div className="budges-header">Badges</div>
            {this.renderBadge()}
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