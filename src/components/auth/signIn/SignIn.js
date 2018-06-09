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
        <TextField
          label="Email"
          id="email"
          type="text"
          onChange={v => this.setState({ email: v })}
        />
        <TextField
          label="Passwoprd"
          type="password"
          id="Passwoprd"
          onChange={v => this.setState({ password: v })}
        />
        <div className="info">
          <Button flat >Login</Button>
          <p>forgot you password ?</p>
          <p>dont have an Account ? SignUp</p>
        </div>
      </Paper >
    )
  }
}
export default SignIn


