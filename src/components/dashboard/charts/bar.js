import React, { Component } from "react"
import echarts from "echarts"

import "./charts.scss"

export default class Bar extends Component {
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
      <div className="bar-chart" ref={ref => (this.chartFrame = ref)}>
        Radar
      </div>
    )
  }
}
