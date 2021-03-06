import { Theme } from "components/styles/Theme"
import React from "react"
import ReactDOM from "react-dom"
import { Game } from "./components/Game"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <Theme />
    <Game />
  </React.StrictMode>,
  document.getElementById("root"),
)

reportWebVitals()
