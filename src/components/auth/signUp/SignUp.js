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
        <TextField
          label="First Name"
          id="firstName"
          onChange={v => this.setState({ firstName: v })}
        />
        <TextField
          label="Last Name"
          id="lastName"
          onChange={v => this.setState({ lastName: v })}
        />
        <TextField
          label="Email"
          id="email"
          onChange={v => this.setState({ email: v })}
        />
        <TextField
          label="Passwoprd"
          id="Passwoprd"
          type="password"
          onChange={v => this.setState({ password: v })}
        />
        <div className="info">
          <Button flat >SignUp</Button>
          <p>already have ab acount</p>
        </div>
      </Paper >
    )
  }
}

export default SignUp


