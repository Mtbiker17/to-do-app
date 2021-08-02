/* eslint-disable no-unused-expressions */
import { initializeHomepage } from './modules/UserInterface.js'
console.log('webpack worked')
window.localStorage

initializeHomepage()

/* function to refesh page at midnight to move task to correct
dates on date change */
function refreshAt (hours, minutes, seconds) {
  const now = new Date()
  const then = new Date()

  if (now.getHours() > hours ||
    (now.getHours() === hours && now.getMinutes() > minutes) ||
    (now.getHours() === hours && now.getMinutes() === minutes && now.getSeconds() >= seconds)) {
    then.setDate(now.getDate() + 1)
  }
  then.setHours(hours)
  then.setMinutes(minutes)
  then.setSeconds(seconds)

  const timeout = (then.getTime() - now.getTime())
  setTimeout(function () { window.location.reload() }, timeout)
}
refreshAt(24, 0, 0)
