import React, { Component } from "react"
import { TabsContainer, Tabs, Tab, TextField, Button } from "react-md"

import { projects } from "./helpers"

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
        <div className="notes">{pj.notes}</div>
      </Tab>
    ))
  };
  render() {
    return (
      <div className="tutorial">
        <div className="project">
          <TabsContainer panelClassName="md-grid" colored>
            <Tabs tabId="simple-tab">{this.renderProjects()}</Tabs>
          </TabsContainer>
        </div>
        <div className="code">
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
        <div className="ressources">
          <TextField id="ressources" rows={10} label="Ressources" />
        </div>
        <div className="solutions">
          <TextField id="solutions" rows={10} label="Solutions" />
        </div>
        <div className="tuto-gb">
          <Button flat>Upload</Button>
          <Button flat>Submit</Button>
        </div>
      </div>
    )
  }
}
