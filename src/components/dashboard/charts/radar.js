import React, { Component } from "react"
import echarts from "echarts"

import "./charts.scss"

export default class Radar extends Component {
  componentDidMount() {
    this.initChart()
  }

  componentDidUpdate() {
    this.initChart()
  }

  initChart() {
    const { options } = this.props
    let myChart = echarts.init(this.chartFrame)
    myChart.setOption(options)
  }
  render() {
    return (
      <div className="radar-chart" ref={ref => (this.chartFrame = ref)}>
        Radar
      </div>
    )
  }
}
