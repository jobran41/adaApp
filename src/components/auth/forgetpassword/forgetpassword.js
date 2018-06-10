import React, { Component } from "react"
import { TextField, Button, Paper } from "react-md"

import '../Style.scss'

class Forgetpassword extends Component {
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
        className="authForm forgetpassword"
      >
      <h3>Forget password ?</h3>
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
          <Button flat className="form-button">Submit</Button>
        </div>
      </Paper >
    )
  }
}

export default Forgetpassword


