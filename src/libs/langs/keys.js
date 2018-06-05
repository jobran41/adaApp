export default ["errorMessage"].reduce((r, i) => {
  r[i] = i
  return r
}, {})
