import React from "react"
import "./App.css"
import { Speakers } from "./components/speakers"
import { AddSpeaker } from "./components/speakers/speakerForm"

const App = () => (
  <div className="App">
    <AddSpeaker />
    <Speakers />
  </div>
)
export default App
