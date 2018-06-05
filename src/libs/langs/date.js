import i18n from "i18n-js"

const dateSTD = (lang => {
  if (!lang || lang === "en") {
    return "en-GB"
  } else {
    return lang
  }
})(i18n.locale)
const intlDate = new Intl.DateTimeFormat(dateSTD)

/**
 * @param {Number | Date} timeStamp
 * */
export function format(timeStamp) {
  const date = new Date(timeStamp)
  if (isNaN(date.getTime())) {
    return "Invalid Date"
  } else {
    return intlDate.format(date)
  }
}
