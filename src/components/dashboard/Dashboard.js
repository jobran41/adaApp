import React, { Component } from "react"
import { TabsContainer, Tabs, Tab } from "react-md"

import FirstTab from "./first-tab"
import SecondTab from "./second-tab"
import ThirdTab from "./third-tab"

import "./Dashboard.scss"

export default class Dashboard extends Component {
  render() {
    return (
      <div className="md-cell md-cell--10 Dashboard">
        <TabsContainer panelClassName="md-grid">
          <Tabs tabId="simple-tab" className="Dashboard-tabs">
            <Tab label="Tab 1">
              <FirstTab />
            </Tab>
            <Tab label="Tab 2">
              <SecondTab />
            </Tab>
            <Tab label="Tab 3">
              <ThirdTab />
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    )
  }
}
