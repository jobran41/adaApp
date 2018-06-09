import React, { Component } from "react"
import { TextField, Button, Paper } from "react-md"

import './SignUp.scss'

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
    return (
      < Paper
        zDepth={1}
        className="SignUp"
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
          <p>already have ab acount</p>
        </div>
      </Paper >
    )
  }
}

export default SignUp


