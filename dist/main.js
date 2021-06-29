(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(t){n(1,arguments);var e=r(t);return e.setHours(0,0,0,0),e}function i(t,e){n(2,arguments);var r=a(t),i=a(e);return r.getTime()===i.getTime()}function o(t){return n(1,arguments),i(t,Date.now())}function s(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}t.r(e),t.d(e,{$:()=>Y});var u=36e5,l={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},c=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,h=/^([+-])(\d{2})(?::?(\d{2}))?$/;function m(t,e){n(1,arguments);var r=e||{},a=null==r.additionalDigits?2:s(r.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var i,o=f(t);if(o.date){var u=g(o.date,a);i=y(u.restDateString,u.year)}if(isNaN(i)||!i)return new Date(NaN);var l,c=i.getTime(),d=0;if(o.time&&(d=v(o.time),isNaN(d)||null===d))return new Date(NaN);if(!o.timezone){var h=new Date(c+d),m=new Date(0);return m.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),m.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),m}return l=b(o.timezone),isNaN(l)?new Date(NaN):new Date(c+d+l)}function f(t){var e,n={},r=t.split(l.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],l.timeZoneDelimiter.test(n.date)&&(n.date=t.split(l.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=l.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function g(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function y(t,e){if(null===e)return null;var n=t.match(c);if(!n)return null;var r=!!n[4],a=w(n[1]),i=w(n[2])-1,o=w(n[3]),s=w(n[4]),u=w(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,u)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,s,u):new Date(NaN);var l=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(T[e]||(D(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(D(t)?366:365)}(e,a)?(l.setUTCFullYear(e,i,Math.max(a,o)),l):new Date(NaN)}function w(t){return t?parseInt(t):1}function v(t){var e=t.match(d);if(!e)return null;var n=p(e[1]),r=p(e[2]),a=p(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*u+6e4*r+1e3*a:NaN}function p(t){return t&&parseFloat(t.replace(",","."))||0}function b(t){if("Z"===t)return 0;var e=t.match(h);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*u+6e4*a):NaN}var T=[31,null,31,30,31,30,31,31,30,31,30,31];function D(t){return t%400==0||t%4==0&&t%100}function k(t,e){n(1,arguments);var a=e||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:s(o),l=null==a.weekStartsOn?u:s(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=r(t),d=c.getDay(),h=(d<l?7:0)+d-l;return c.setDate(c.getDate()-h),c.setHours(0,0,0,0),c}function C(t,e,r){n(2,arguments);var a=k(t,r),i=k(e,r);return a.getTime()===i.getTime()}function M(t,e){return n(1,arguments),C(t,Date.now(),e)}function x(t,e){n(2,arguments);var a=r(t),i=r(e);return a.getFullYear()===i.getFullYear()&&a.getMonth()===i.getMonth()}function P(t){return n(1,arguments),x(Date.now(),t)}let j=[],S=[],U=[],E=[],N=[];class I{constructor(t,e,n,r,a,i){this.title=t,this.dueDate=r,this.priority=n,this.notes=e,this.taskID=a,this.completed=i}getTitle(){return this.title}setDueDate(){return this.dueDate}setPriority(){return this.priority}addNotes(){return this.notes}createTaskID(){return this.id}checkCompleted(){return this.completed}}function W(t){return!0===o(m(t.dueDate))&&S.push(t),!0===M(m(t.dueDate))&&U.push(t),!0===P(m(t.dueDate))&&E.push(t),"Important"===t.priority&&N.push(t),{dailyArray:S,weeklyArray:U,monthlyArray:E,importantArray:N}}function O(t,e,n){return e.forEach((e=>{!0===o(m(e.dueDate))&&!0===t&&e.taskID===n&&(S[e.taskID].completed=!0),!0===o(m(e.dueDate))&&!1===t&&e.taskID===n&&(S[e.taskID].completed=!1),!0===M(m(e.dueDate))&&!0===t&&e.taskID===n&&(U[e.taskID].completed=!0),!0===M(m(e.dueDate))&&!1===t&&e.taskID===n&&(U[e.taskID].completed=!1),!0===P(m(e.dueDate))&&1==t&&e.taskID===n&&(E[e.taskID].completed=!0),!0===P(m(e.dueDate))&&!1===t&&e.taskID===n&&(E[e.taskID].completed=!1),"Important"===e.priority&&!0===t&&e.taskID===n&&(N[e.taskID].completed=!0),"Important"===e.priority&&!1===t&&e.taskID===n&&(N[e.taskID].completed=!1)})),{dailyArray:S,weeklyArray:U,monthlyArray:E,importantArray:N}}class Y{constructor(t,e,n,r){this.title=t,this.projectID=e,this.completed=n,this.taskList=r}getTitle(){return this.title}createProjectID(){return this.projectID}checkCompleted(){return this.completed}makeTaskArray(){let t=[];return t=localStorage.setItem(`${this.title}`,JSON.stringify(`${this.title}`)),this.taskList}}function A(t){return localStorage.setItem("inboxArray",JSON.stringify(j))}function L(){return j=JSON.parse(localStorage.getItem("inboxArray")),null===j&&(j=[]),j}function q(){return e.projectArray=JSON.parse(localStorage.getItem("projectArray")),null===e.projectArray&&(e.projectArray=[]),e.projectArray}function F(t){n(1,arguments);var e=r(t);return!isNaN(e)}var H={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function z(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var $,X={date:z({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:z({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:z({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},B={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Q(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function G(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=r.match(o);if(!s)return null;var u,l=s[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(l))return n}(c):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(l))return n}(c),u=t.valueCallback?t.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(l.length)}}}const R={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof H[t]?H[t]:1===e?H[t].one:H[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:X,formatRelative:function(t,e,n,r){return B[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Q({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Q({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:Q({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Q({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Q({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:($={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match($.matchPattern);if(!a)return null;var i=a[0],o=n.match($.parsePattern);if(!o)return null;var s=$.valueCallback?$.valueCallback(o[0]):o[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(i.length)}}),era:G({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:G({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:G({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:G({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:G({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function J(t,e){n(2,arguments);var a=r(t).getTime(),i=s(e);return new Date(a+i)}function _(t,e){n(2,arguments);var r=s(e);return J(t,-r)}function Z(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const V=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Z("yy"===e?r%100:r,e.length)},K=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Z(n+1,2)},tt=function(t,e){return Z(t.getUTCDate(),e.length)},et=function(t,e){return Z(t.getUTCHours()%12||12,e.length)},nt=function(t,e){return Z(t.getUTCHours(),e.length)},rt=function(t,e){return Z(t.getUTCMinutes(),e.length)},at=function(t,e){return Z(t.getUTCSeconds(),e.length)},it=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Z(Math.floor(r*Math.pow(10,n-3)),e.length)};var ot=864e5;function st(t){n(1,arguments);var e=1,a=r(t),i=a.getUTCDay(),o=(i<e?7:0)+i-e;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function ut(t){n(1,arguments);var e=r(t),a=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=st(i),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var u=st(s);return e.getTime()>=o.getTime()?a+1:e.getTime()>=u.getTime()?a:a-1}function lt(t){n(1,arguments);var e=ut(t),r=new Date(0);r.setUTCFullYear(e,0,4),r.setUTCHours(0,0,0,0);var a=st(r);return a}var ct=6048e5;function dt(t,e){n(1,arguments);var a=e||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:s(o),l=null==a.weekStartsOn?u:s(a.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=r(t),d=c.getUTCDay(),h=(d<l?7:0)+d-l;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}function ht(t,e){n(1,arguments);var a=r(t,e),i=a.getUTCFullYear(),o=e||{},u=o.locale,l=u&&u.options&&u.options.firstWeekContainsDate,c=null==l?1:s(l),d=null==o.firstWeekContainsDate?c:s(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(i+1,0,d),h.setUTCHours(0,0,0,0);var m=dt(h,e),f=new Date(0);f.setUTCFullYear(i,0,d),f.setUTCHours(0,0,0,0);var g=dt(f,e);return a.getTime()>=m.getTime()?i+1:a.getTime()>=g.getTime()?i:i-1}function mt(t,e){n(1,arguments);var r=e||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:s(i),u=null==r.firstWeekContainsDate?o:s(r.firstWeekContainsDate),l=ht(t,e),c=new Date(0);c.setUTCFullYear(l,0,u),c.setUTCHours(0,0,0,0);var d=dt(c,e);return d}var ft=6048e5;function gt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+Z(i,2)}function yt(t,e){return t%60==0?(t>0?"-":"+")+Z(Math.abs(t)/60,2):wt(t,e)}function wt(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Z(Math.floor(a/60),2)+n+Z(a%60,2)}const vt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return V(t,e)},Y:function(t,e,n,r){var a=ht(t,r),i=a>0?a:1-a;return"YY"===e?Z(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):Z(i,e.length)},R:function(t,e){return Z(ut(t),e.length)},u:function(t,e){return Z(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Z(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Z(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return K(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Z(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,a,i){var o=function(t,e){n(1,arguments);var a=r(t),i=dt(a,e).getTime()-mt(a,e).getTime();return Math.round(i/ft)+1}(t,i);return"wo"===e?a.ordinalNumber(o,{unit:"week"}):Z(o,e.length)},I:function(t,e,a){var i=function(t){n(1,arguments);var e=r(t),a=st(e).getTime()-lt(e).getTime();return Math.round(a/ct)+1}(t);return"Io"===e?a.ordinalNumber(i,{unit:"week"}):Z(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):tt(t,e)},D:function(t,e,a){var i=function(t){n(1,arguments);var e=r(t),a=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=e.getTime(),o=a-i;return Math.floor(o/ot)+1}(t);return"Do"===e?a.ordinalNumber(i,{unit:"dayOfYear"}):Z(i,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Z(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Z(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Z(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return et(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):nt(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Z(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Z(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):rt(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):at(t,e)},S:function(t,e){return it(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return yt(a);case"XXXX":case"XX":return wt(a);case"XXXXX":case"XXX":default:return wt(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return yt(a);case"xxxx":case"xx":return wt(a);case"xxxxx":case"xxx":default:return wt(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+gt(a,":");case"OOOO":default:return"GMT"+wt(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+gt(a,":");case"zzzz":default:return"GMT"+wt(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Z(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Z((r._originalDate||t).getTime(),e.length)}};function pt(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function bt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const Tt={p:bt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return pt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",pt(a,e)).replace("{{time}}",bt(i,e))}};function Dt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var kt=["D","DD"],Ct=["YY","YYYY"];function Mt(t){return-1!==kt.indexOf(t)}function xt(t){return-1!==Ct.indexOf(t)}function Pt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var jt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,St=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ut=/^'([^]*?)'?$/,Et=/''/g,Nt=/[a-zA-Z]/;function It(t,e,a){n(2,arguments);var i=String(e),o=a||{},u=o.locale||R,l=u.options&&u.options.firstWeekContainsDate,c=null==l?1:s(l),d=null==o.firstWeekContainsDate?c:s(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=u.options&&u.options.weekStartsOn,m=null==h?0:s(h),f=null==o.weekStartsOn?m:s(o.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var g=r(t);if(!F(g))throw new RangeError("Invalid time value");var y=Dt(g),w=_(g,y),v={firstWeekContainsDate:d,weekStartsOn:f,locale:u,_originalDate:g},p=i.match(St).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Tt[e])(t,u.formatLong,v):t})).join("").match(jt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return Wt(n);var a=vt[r];if(a)return!o.useAdditionalWeekYearTokens&&xt(n)&&Pt(n,e,t),!o.useAdditionalDayOfYearTokens&&Mt(n)&&Pt(n,e,t),a(w,n,u.localize,v);if(r.match(Nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return p}function Wt(t){return t.match(Ut)[1].replace(Et,"'")}const Ot=(()=>{let t;const n=()=>{currentTitle.textContent="Inbox",addTask.style.visibility="visible",addProjectTask.style.visibility="hidden",L(),t=j,Yt.removeChildren(),Yt.iterateTaskDisplay(t)},r=()=>{currentTitle.textContent="Today",addTask.style.visibility="visible",addProjectTask.style.visibility="hidden",t=S,Yt.removeChildren(),Yt.iterateTaskDisplay(t)},a=()=>{currentTitle.textContent="Weekly",addTask.style.visibility="visible",addProjectTask.style.visibility="hidden",t=U,Yt.removeChildren(),Yt.iterateTaskDisplay(t)},i=()=>{currentTitle.textContent="Monthly",addTask.style.visibility="visible",addProjectTask.style.visibility="hidden",t=E,Yt.removeChildren(),Yt.iterateTaskDisplay(t)},o=()=>{currentTitle.textContent="Important",addTask.style.visibility="visible",addProjectTask.style.visibility="hidden",t=N,Yt.removeChildren(),Yt.iterateTaskDisplay(t)},s=()=>{q(),currentTitle.textContent="Projects",addTask.style.visibility="hidden",addProjectTask.style.visibility="visible",t=e.projectArray,Yt.removeProjectChildren(),Yt.removeChildren(),Yt.iterateTaskDisplay(t)};return inbox.addEventListener("click",(()=>{n()})),today.addEventListener("click",(()=>{r()})),week.addEventListener("click",(()=>{a()})),month.addEventListener("click",(()=>{i()})),important.addEventListener("click",(()=>{o()})),arrow.addEventListener("click",(()=>{s()})),{showInbox:n,showDaily:r,showWeekly:a,showMonthly:i,showImportant:o,showProjects:s}})(),Yt=(addTask.addEventListener("click",(()=>{taskModal.style.display="flex"})),closeBtn.onclick=function(){taskModal.style.display="none"},submitTask.addEventListener("click",(()=>{if(""===submitTitle.value)return void alert("Task must have a title");if(""===modaldateinput.value)return void alert("Please enter a due date for this task");let t=It(m(modaldateinput.value),"MM/dd/yyyy"),e=It(new Date,"MM/dd/yyyy");if(!0===function(t,e){n(2,arguments);var a=r(t),i=r(e);return a.getTime()<i.getTime()}(new Date(t),new Date(e)))return void alert("This due date occurs before todays date");L();const a=new I(`${submitTitle.value}`,`${submitNotes.value}`,`${submitPriority.value}`,`${modaldateinput.value}`,`${j.length}`,!1);j.push(a),W(a),A(),submitTitle.value="",submitNotes.value="",modaldateinput.value="",taskModal.style.display="none",Yt.refreshTasksUI(currentTitle.textContent)})),(()=>{addProject.addEventListener("click",(()=>{projectModal.style.display="flex",Ot.showProjects()})),projectCloseBtn.onclick=function(){projectModal.style.display="none"};submitProject.addEventListener("click",(()=>{if(""===submitProjectTitle.value)return void alert("Project must have a title");projectsContainer.style.visibility="hidden",arrow.classList.remove("arrowDown"),"visible"!==projectsContainer.style.visibility?(arrow.classList.add("arrowDown"),projectsContainer.style.visibility="visible"):projectsContainer.style.visibility="hidden",q();const t=new Y(`${submitProjectTitle.value}`,`${e.projectArray.length}`,!1,[]);e.projectArray.push(t),e.projectArray,localStorage.setItem("projectArray",JSON.stringify(e.projectArray)),e.projectArray,submitProject.value="",projectModal.style.display="none",Yt.showProjectUI(`${submitProjectTitle.value}`,`${e.projectArray.length}`),Yt.refreshTasksUI(currentTitle.textContent)}))})(),(()=>{const t=(t,e,n,r,a,i)=>{let o=document.createElement("div");o.classList.add("task"),o.setAttribute("id",`${r}`);let s=document.createElement("label");s.classList.add("checkbox-label");let u=document.createElement("input");u.setAttribute("type","checkbox"),s.appendChild(u);let l=document.createElement("span");l.classList.add("checkbox-custom"),s.appendChild(l);let c=document.createElement("div");c.setAttribute("id","taskTitle"),c.textContent=`${t}`;let d=document.createElement("div");d.setAttribute("id","taskNotes"),d.textContent="Notes:";let h=document.createElement("div");h.setAttribute("id","notes"),h.textContent=`${e}`;let m=document.createElement("div");m.setAttribute("id","dueDate"),m.textContent="Due Date:";let f=document.createElement("input");f.setAttribute("type","date"),f.setAttribute("id","date"),f.value=`${n}`,o.appendChild(s),o.appendChild(c),o.appendChild(d),d.appendChild(h),o.appendChild(m),m.appendChild(f),taskContainer.appendChild(o),!0===a?(c.style.textDecoration="line-through",u.checked=!0):!1===a&&(u.checked=!1,c.style.textDecoration="none"),"Important"===i&&c.classList.add("pseudoImportant"),u.addEventListener("click",(()=>{L(),!0===u.checked?(j[r].completed=!0,c.style.textDecoration="line-through",A(),O(!0,j,r)):!1===u.checked&&(j[r].completed=!1,c.style.textDecoration="none",A(),O(!1,j,r))}))},n=(t,e)=>{let n=document.createElement("div");n.setAttribute("id",`${e}`),n.classList.add("projectList"),n.textContent=`${t}`,projectsContainer.appendChild(n)};return remove.addEventListener("click",(()=>{L(),j.forEach((t=>{t.completed,j.splice(t.taskID,1)})),A(),location.reload()})),arrow.addEventListener("click",(()=>{arrow.classList.toggle("arrowDown"),"visible"!==projectsContainer.style.visibility?projectsContainer.style.visibility="visible":projectsContainer.style.visibility="hidden"})),{removeChildren:()=>{for(;taskContainer.lastElementChild;)taskContainer.removeChild(taskContainer.lastElementChild)},showTaskUI:t,iterateTaskDisplay:r=>{r!==e.projectArray?r.forEach((e=>{t(e.title,e.notes,e.dueDate,e.taskID,e.completed,e.priority)})):r.forEach((t=>{n(t.title,t.projectID)}))},refreshTasksUI:t=>{"Inbox"===t?Ot.showInbox():"Today"===t?Ot.showDaily():"Weekly"===t?Ot.showWeekly():"Monthly"===t?Ot.showMonthly():"Important"===t?Ot.showImportant():"Projects"===t&&(taskButtonContainer.style.visibility="visible",Ot.showProjects())},showProjectUI:n,removeProjectChildren:()=>{for(;projectsContainer.lastElementChild;)projectsContainer.removeChild(projectsContainer.lastElementChild)}}})());console.log("webpack worked"),window.localStorage,L(),j.forEach((t=>{let e=0;t.taskID=e,W(t),A(),e++})),Yt.iterateTaskDisplay(j),function(t,e,n){var r=new Date,a=new Date;(r.getHours()>24||24==r.getHours()&&r.getMinutes()>0||24==r.getHours()&&0==r.getMinutes()&&r.getSeconds()>=0)&&a.setDate(r.getDate()+1),a.setHours(24),a.setMinutes(0),a.setSeconds(0);var i=a.getTime()-r.getTime();setTimeout((function(){window.location.reload()}),i)}()})();