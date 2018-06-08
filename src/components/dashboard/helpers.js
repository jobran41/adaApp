import echarts from "echarts"
export const lesson = {
  title: "Game Track",
  hashtags: ["Unity", "css", "Javascript"],
  progress: 60,
  skillC: 30,
  skillL: 10
}

export const lessons = [
  {
    title: "html",
    description: "lorem ipsum description"
  },
  {
    title: "CSS",
    description: "lorem ipsum description"
  },
  {
    title: "Javascript",
    description: "lorem ipsum description"
  }
]

export const agenda = {
  title: "Agenda",
  description: "Weekly events",
  events: [
    {
      createdAt: {
        day: 20,
        month: "April",
        time: "19:00"
      },
      title: "Event Title",
      checked: true
    },
    {
      createdAt: {
        day: 20,
        month: "April",
        time: "19:00"
      },
      title: "Event Title",
      checked: true
    },
    {
      createdAt: {
        day: 20,
        month: "April",
        time: "19:00"
      },
      title: "Event Title",
      checked: false
    }
  ]
}
export const feedback = {
  title: "Feedback",
  description: "Submit feedback"
}

export const notes = {
  title: "Notes",
  description: "Submit feedback"
}

export const expertise = {
  title: "Expertises",
  description: "All skills and Expertises",
  skills: [
    {
      name: "CSS",
      progress: 55
    },
    {
      name: "Javascript",
      progress: 55
    },
    {
      name: "Html",
      progress: 55
    },
    {
      name: "Other",
      progress: 55
    },
    {
      name: "Other",
      progress: 55
    }
  ]
}

export const skills = {
  title: "Skills",
  description: "All skills",
  options: {
    title: {
      text: "Bar title"
    },
    tooltip: {},
    legend: {
      data: ["Allocated Budget）", "Actual Spending）"]
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: "#fff",
          backgroundColor: "#999",
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator: [
        { name: "sales）", max: 6500 },
        { name: "Administration）", max: 16000 },
        { name: "（Information Techology）", max: 30000 },
        { name: "Customer Support）", max: 38000 },
        { name: "Development）", max: 52000 },
        { name: "(Marketing）", max: 25000 }
      ]
    },
    series: [
      {
        name: "Budget vs spending）",
        type: "radar",
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: "Allocated Budget）"
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: "Actual Spending）"
          }
        ]
      }
    ]
  }
}

export const logs = {
  title: "Log time",
  description: "All ins and outs",
  options: {
    title: {
      text: "radar chart",
      subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
    },
    xAxis: {
      data: ["lorem", "lorem", "lorem", "lorem", "lorem", "lorem"],
      axisLabel: {
        inside: true,
        textStyle: {
          color: "#fff"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: "#999"
        }
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        // For shadow
        type: "bar",
        itemStyle: {
          normal: { color: "rgba(0,0,0,0.05)" }
        },
        barGap: "-100%",
        barCategoryGap: "40%",
        animation: false
      },
      {
        type: "bar",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.5, color: "#188df0" },
              { offset: 1, color: "#188df0" }
            ])
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: [220, 182, 191, 234, 290, 330]
      }
    ]
  }
}
