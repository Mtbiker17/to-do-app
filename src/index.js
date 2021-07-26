console.log('webpack worked');
window.localStorage;
//localStorage.clear();

import { initializeHomepage } from './modules/UserInterface.js';

initializeHomepage();

/*function to refesh page at midnight to move task to correct
dates on date change*/
function refreshAt(hours, minutes, seconds) {
  var now = new Date();
  var then = new Date();

  if (now.getHours() > hours ||
    (now.getHours() == hours && now.getMinutes() > minutes) ||
    now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
    then.setDate(now.getDate() + 1);
  }
  then.setHours(hours);
  then.setMinutes(minutes);
  then.setSeconds(seconds);

  var timeout = (then.getTime() - now.getTime());
  setTimeout(function () { window.location.reload(); }, timeout)
};
refreshAt(24, 0, 0);
