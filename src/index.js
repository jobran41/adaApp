import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import "libs/langs"
import App from "components/app"
import store from "store"
import registerServiceWorker from "registerServiceWorker"

import "index.scss"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker()
