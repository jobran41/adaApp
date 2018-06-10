import React, { Component } from "react"
import { TextField, Button, Paper } from "react-md"
import { withRouter } from "react-router"

import * as routes from "libs/constants/routes"

import '../Style.scss'

@withRouter
class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  render() {
    const { history } = this.props
    return (
      < Paper
        zDepth={1}
        className="authForm SignUp"
      >
        <h3>SignUp</h3>
        <TextField
          placeholder="First Name"
          id="firstName"
          block
          onChange={v => this.setState({ firstName: v })}
        />
        <TextField
          placeholder="Last Name"
          id="lastName"
          block
          onChange={v => this.setState({ lastName: v })}
        />
        <TextField
          placeholder="Email"
          id="email"
          block
          onChange={v => this.setState({ email: v })}
        />
        <TextField
          placeholder="Passwoprd"
          id="Passwoprd"
          type="password"
          block
          onChange={v => this.setState({ password: v })}
        />
        <div className="info">
          <Button flat className="form-button">SignUp</Button>
          <p>already have ab acount <b onClick={() => history.push(routes.SIGN_IN)}>SignIn</b></p>
        </div>
      </Paper >
    )
  }
}

export default SignUp


