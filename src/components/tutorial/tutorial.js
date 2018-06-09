import React, { Component } from "react"
import { TabsContainer, Tabs, Tab, TextField, Button } from "react-md"

import { projects } from "./helpers"

import './tutorial.scss'

export default class Tutorial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberProject: 0
    }
  }
  renderProjects = () => {
    const { numberProject } = this.state
    return projects.map((pj, index) => (
      <Tab
        key={index}
        label={numberProject === index ? pj.title : index + 1}
        onClick={() => this.setState({ numberProject: index })}
      >
        <div className="text">{pj.text}</div>
        <div className="sample">{pj.code}</div>
        <div className="notes"><h4>note</h4> {pj.notes}</div>
      </Tab>
    ))
  };
  render() {
    return (
      <div className="md-cell md-cell--10 tutorial">
        <div className="project">
          <TabsContainer panelClassName="tutorial-panel md-grid">
            <Tabs className="project-tabs" tabId="simple-tab">{this.renderProjects()}</Tabs>
          </TabsContainer>
        </div>
        <div className="code">
          <h4>code</h4>
          <div className="codeWApper">
            <code>
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
              {`<div class="SideBar-header-description"><h5>Instructor Name</h5><span>Game Instructor</span><p class="tel">00218867234</p><p class="Email">jobran@gmail.com</p></div>`}
            </code>
          </div>
        </div>
        <div className="ressources">
          <h4>ressources</h4>
          <TextField id="ressources" rows={10} placeholder="Ressources" />
        </div>
        <div className="ressources">
          <h4>solutions</h4>
          <TextField id="solutions" rows={10} placeholder="Solutions" />
        </div>
        <div className="tuto-gb">
          <Button flat className="tutorial-button">Upload</Button>
          <Button flat className="tutorial-button">Submit</Button>
        </div>
      </div>
    )
  }
}
