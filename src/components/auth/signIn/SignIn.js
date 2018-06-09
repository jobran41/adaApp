import React, { Component } from "react"
import { TextField, Button, Paper } from "react-md"

import './SignIn.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "" }
  }
  render() {
    return (
      < Paper
        zDepth={1}
        className="SignIn"
      >
        <h3>Login</h3>
        <TextField
          placeholder="Email"
          id="email"
          type="email"
          block
          onChange={v => this.setState({ email: v })}
        />
        <TextField
          placeholder="Passwoprd"
          type="password"
          id="Passwoprd"
          block
          onChange={v => this.setState({ password: v })}
        />
        <div className="info">
          <Button flat className="form-button">Login</Button>
          <p>forgot you <b>password ?</b></p>
          <p>dont have an Account ? <b>SignUp</b></p>
        </div>
      </Paper >
    )
  }
}
export default SignIn


