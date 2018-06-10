import React, { Component } from "react"
import { Button, Avatar } from "react-md"
import { cls } from "reactutils"
import { connect } from 'react-redux'

//import Logo from "images/logo.png"
//import * as cookies from "tiny-cookie"
import { withRouter } from "react-router-dom"
import Navigation from "./Navigation"
import { toggleTopbar } from "modules/app/actions"

import "./styles.scss"


@withRouter
@connect(({ app }) => ({
  sideBarIsTrue: app.topbarCollapsed
}), { toggleTopbar })
class TopBar extends Component {
  onToggleClick = (collapsed) => {
    const { toggleTopbar } = this.props
    toggleTopbar(collapsed)
  };
  render() {
    // const me = this.props.query.data;
    const letter = "jobran".charAt(0).toUpperCase()
    const { sideBarIsTrue } = this.props

    return (
      <div className="topBar">
        <div className="topBar-logo">
          <span>ada.</span>
        </div>
        <Navigation />
        <div className="topBar-info">
          <Avatar className="title-bar-item-right-space-half" suffix="light-blue">
            {letter}
          </Avatar>
          <div className="nameStudent">Jobran amairi</div>
          <Button
            icon
            className="apptitlebar-collapse-btn"
            iconClassName={cls(
              "topBar-collapseicon",
              "mdi",
              sideBarIsTrue ? "mdi-close" : "mdi-menu"
            )}
            onClick={() => this.onToggleClick(sideBarIsTrue)}
          />
        </div>
      </div>
    )
  }



}
/*
  signOut = () => {
    cookies.remove("access_token")
    cookies.remove("__Secure-access_token")
    cookies.remove("__Secure-id_token")
    cookies.remove("refresh_token")
    cookies.remove("JSESSIONID")
    window.location.href = "/login"
  };
}
*/
export default TopBar 