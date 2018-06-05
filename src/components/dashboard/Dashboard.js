import React, { Component } from "react"
import { TabsContainer, Tabs, Tab } from "react-md"

import FirstTab from "./first-tab"

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="simple-tab">
            <Tab label="Tab 1">
              <FirstTab />
            </Tab>
            <Tab label="Tab 2">
              <h3>Now look at me!</h3>
            </Tab>
            <Tab label="Tab 3">
              <h3>Now look at me!</h3>
            </Tab>
          </Tabs>
        </TabsContainer>
      </div>
    )
  }
}
