import React, { Component } from "react"
import { TextField, Button, Paper, Snackbar } from "react-md"
import { withRouter } from "react-router-dom"
import * as cookies from "tiny-cookie"

import * as routes from "libs/constants/routes"

import "../Style.scss"

@withRouter
class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "", toasts: [], autohide: true }
  }
  signIn = () => {
    const { email, password } = this.state
    const { history } = this.props
    if (email === "admin" && password === "admin") {
      cookies.set("login", email)
      history.push(`${routes.Container}${routes.Dashboard}`)
    } else {
      this.addToast("Login error")
    }
  };
  addToast = (text, action, autohide = true) => {
    this.setState(state => {
      const toasts = state.toasts.slice()
      toasts.push({ text, action })
      return { toasts, autohide }
    })
  };
  dismissToast = () => {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  };

  render() {
    const { email, password, toasts, autohide } = this.state
    const { history } = this.props
    return (
      < Paper
        zDepth={1}
        className="authForm SignIn"
      >
        <h3>Login</h3>
        <TextField
          placeholder="Email"
          id="email"
          type="email"
          block
          onChange={v => this.setState({ email: v })}
          value={email}
        />
        <TextField
          placeholder="Passwoprd"
          type="password"
          id="password"
          block
          onChange={v => this.setState({ password: v })}
          value={password}
        />
        <div className="info">
          <Button flat className="form-button" onClick={this.signIn}>Login</Button>
          <p>forgot you <b><span className="FormLink" onClick={() => history.push(routes.FORGET)}>password ?</span></b></p>
          <p>dont have an Account ? <b onClick={() => history.push(routes.SIGN_UP)}>SignUp</b></p>
        </div>
        <Snackbar
          id="example-snackbar"
          toasts={toasts}
          autohide={autohide}
          onDismiss={this.dismissToast}
        />
      </Paper>
    )
  }
}
export default SignIn
