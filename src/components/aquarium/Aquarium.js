import React, { Component } from 'react'
import { TabsContainer, Tabs, Tab } from 'react-md'


import CalenderProfile from './components/calenderProfile'
import InstructorList from './components/instructor'
import LiveSession from './components/liveSession'
import DetailSession from './components/detailSession'

import { dataInstructor } from './components/instructor/helpers'
import { dataLiveSession } from './components/liveSession/helpers'

import "./Aquarium.scss"

export default class Aquarium extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageInstructor: 1,
      pageLiveSession: 1,
      itemDataInstructor: {},
      itemDataLiveSession: {}
    }
  }
  selectInstructor = (itemData) => {
    this.setState({ pageInstructor: 2, itemDataInstructor: itemData })
  }
  selectLiveSession = (itemData) => {
    this.setState({ pageLiveSession: 2, itemDataLiveSession: itemData })
  }
  onBackCard = (selectPage) => {
    this.setState({ [selectPage]: 1 })
  }
  render() {
    const { pageInstructor, pageLiveSession, itemDataInstructor, itemDataLiveSession } = this.state
    return (
      <div className="md-cell md-cell--10 Aquarium">
        <TabsContainer panelClassName="md-grid">
          <Tabs tabId="simple-tab" className="Aquarium-tabs">
            <Tab label="Insctroctor">
              <div className="Aquarium-tabsInsctroctor md-grid">
                {pageInstructor === 1 && <InstructorList data={dataInstructor} selectInstructor={this.selectInstructor} />}
                {pageInstructor === 2 && <CalenderProfile data={itemDataInstructor} onBackCard={() => this.onBackCard('pageInstructor')} className="CalenderProfile" />}
              </div>
            </Tab>
            <Tab label="Live Coding">
              <div className="Aquarium-tabsLiveSession  md-grid">
                {pageLiveSession === 1 && <LiveSession data={dataLiveSession} selectLiveSession={this.selectLiveSession} />}
                {pageLiveSession === 2 && <DetailSession data={itemDataLiveSession} onBackCard={() => this.onBackCard('pageLiveSession')} />}
              </div>
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    )
  }
}