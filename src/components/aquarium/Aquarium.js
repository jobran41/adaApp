import React, { Component } from 'react'
import { TabsContainer, Tabs, Tab } from 'react-md'


import CalenderProfile from './components/calenderProfile'
import InstructorList from './components/instructor'
import { dataInstructor } from './components/instructor/helpers'
import { dataProfile } from './components/calenderProfile/helpers'



import "./Aquarium.scss"

export default class Aquarium extends Component {
  render() {
    return (
      <div className="Aquarium">
        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="simple-tab" >
            <Tab label="Insctroctor">
              <div className="Aquarium-tabsInsctroctor">
                <InstructorList data={dataInstructor} />
                <CalenderProfile data={dataProfile} />
              </div>
            </Tab>
            <Tab label="Live Coding">
              <h3>Now look at me!</h3>
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    )
  }
}