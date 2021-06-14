(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var r=e(n);return r.setHours(0,0,0,0),r}function r(e,r){t(2,arguments);var a=n(e),i=n(r);return a.getTime()===i.getTime()}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var i=36e5,o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e,n){t(1,arguments);var r=n||{},i=null==r.additionalDigits?2:a(r.additionalDigits);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,u=l(e);if(u.date){var s=h(u.date,i);o=m(s.restDateString,s.year)}if(isNaN(o)||!o)return new Date(NaN);var d,c=o.getTime(),f=0;if(u.time&&(f=g(u.time),isNaN(f)||null===f))return new Date(NaN);if(!u.timezone){var w=new Date(c+f),y=new Date(0);return y.setFullYear(w.getUTCFullYear(),w.getUTCMonth(),w.getUTCDate()),y.setHours(w.getUTCHours(),w.getUTCMinutes(),w.getUTCSeconds(),w.getUTCMilliseconds()),y}return d=v(u.timezone),isNaN(d)?new Date(NaN):new Date(c+f+d)}function l(t){var e,n={},r=t.split(o.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],o.timeZoneDelimiter.test(n.date)&&(n.date=t.split(o.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=o.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function h(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function m(t,e){if(null===e)return null;var n=t.match(u);if(!n)return null;var r=!!n[4],a=f(n[1]),i=f(n[2])-1,o=f(n[3]),s=f(n[4]),d=f(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,d)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,s,d):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(y[e]||(b(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(b(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}function f(t){return t?parseInt(t):1}function g(t){var e=t.match(s);if(!e)return null;var n=w(e[1]),r=w(e[2]),a=w(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*i+6e4*r+1e3*a:NaN}function w(t){return t&&parseFloat(t.replace(",","."))||0}function v(t){if("Z"===t)return 0;var e=t.match(d);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*i+6e4*a):NaN}var y=[31,null,31,30,31,30,31,31,30,31,30,31];function b(t){return t%400==0||t%4==0&&t%100}function p(n,r){t(1,arguments);var i=r||{},o=i.locale,u=o&&o.options&&o.options.weekStartsOn,s=null==u?0:a(u),d=null==i.weekStartsOn?s:a(i.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=e(n),l=c.getDay(),h=(l<d?7:0)+l-d;return c.setDate(c.getDate()-h),c.setHours(0,0,0,0),c}function T(e,n,r){t(2,arguments);var a=p(e,r),i=p(n,r);return a.getTime()===i.getTime()}function C(n,r){t(2,arguments);var a=e(n),i=e(r);return a.getFullYear()===i.getFullYear()&&a.getMonth()===i.getMonth()}let D=[],k=[],M=[],x=[],U=[];class P{constructor(t,e,n,r,a){this.title=t,this.dueDate=r,this.priority=n,this.notes=e,this.taskID=a}getTitle(){return this.title}setDueDate(){return this.dueDate}setPriority(){return this.priority}addNotes(){return this.notes}createTaskID(){return this.id}}function S(e){!0===function(e){return t(1,arguments),r(e,Date.now())}(c(e.dueDate))&&k.push(e),!0===function(e,n){return t(1,arguments),T(e,Date.now(),n)}(c(e.dueDate))&&M.push(e),!0===function(e){return t(1,arguments),C(Date.now(),e)}(c(e.dueDate))&&x.push(e),"Important"===e.priority&&U.push(e)}function N(){D=JSON.parse(localStorage.getItem("inboxArray")),null===D&&(D=[]),console.log(D)}function E(n){t(1,arguments);var r=e(n);return!isNaN(r)}var W={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Y(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var O,q={date:Y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},L={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function F(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function z(t){return function(e,n){var r=String(e),a=n||{},i=a.width,o=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,d=u[0],c=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(c):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(c),s=t.valueCallback?t.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(d.length)}}}const H={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof W[t]?W[t]:1===e?W[t].one:W[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:q,formatRelative:function(t,e,n,r){return L[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:F({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:F({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:F({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:F({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:F({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(O={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(O.matchPattern);if(!a)return null;var i=a[0],o=n.match(O.parsePattern);if(!o)return null;var u=O.valueCallback?O.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:z({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:z({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:z({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:z({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:z({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function A(n,r){t(2,arguments);var i=e(n).getTime(),o=a(r);return new Date(i+o)}function I(e,n){t(2,arguments);var r=a(n);return A(e,-r)}function j(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const X=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return j("yy"===e?r%100:r,e.length)},Q=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):j(n+1,2)},B=function(t,e){return j(t.getUTCDate(),e.length)},G=function(t,e){return j(t.getUTCHours()%12||12,e.length)},R=function(t,e){return j(t.getUTCHours(),e.length)},$=function(t,e){return j(t.getUTCMinutes(),e.length)},J=function(t,e){return j(t.getUTCSeconds(),e.length)},Z=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return j(Math.floor(r*Math.pow(10,n-3)),e.length)};var _=864e5;function V(n){t(1,arguments);var r=1,a=e(n),i=a.getUTCDay(),o=(i<r?7:0)+i-r;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function K(n){t(1,arguments);var r=e(n),a=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=V(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=V(u);return r.getTime()>=o.getTime()?a+1:r.getTime()>=s.getTime()?a:a-1}function tt(e){t(1,arguments);var n=K(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=V(r);return a}var et=6048e5;function nt(n,r){t(1,arguments);var i=r||{},o=i.locale,u=o&&o.options&&o.options.weekStartsOn,s=null==u?0:a(u),d=null==i.weekStartsOn?s:a(i.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=e(n),l=c.getUTCDay(),h=(l<d?7:0)+l-d;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}function rt(n,r){t(1,arguments);var i=e(n,r),o=i.getUTCFullYear(),u=r||{},s=u.locale,d=s&&s.options&&s.options.firstWeekContainsDate,c=null==d?1:a(d),l=null==u.firstWeekContainsDate?c:a(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(o+1,0,l),h.setUTCHours(0,0,0,0);var m=nt(h,r),f=new Date(0);f.setUTCFullYear(o,0,l),f.setUTCHours(0,0,0,0);var g=nt(f,r);return i.getTime()>=m.getTime()?o+1:i.getTime()>=g.getTime()?o:o-1}function at(e,n){t(1,arguments);var r=n||{},i=r.locale,o=i&&i.options&&i.options.firstWeekContainsDate,u=null==o?1:a(o),s=null==r.firstWeekContainsDate?u:a(r.firstWeekContainsDate),d=rt(e,n),c=new Date(0);c.setUTCFullYear(d,0,s),c.setUTCHours(0,0,0,0);var l=nt(c,n);return l}var it=6048e5;function ot(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+j(i,2)}function ut(t,e){return t%60==0?(t>0?"-":"+")+j(Math.abs(t)/60,2):st(t,e)}function st(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+j(Math.floor(a/60),2)+n+j(a%60,2)}const dt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return X(t,e)},Y:function(t,e,n,r){var a=rt(t,r),i=a>0?a:1-a;return"YY"===e?j(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):j(i,e.length)},R:function(t,e){return j(K(t),e.length)},u:function(t,e){return j(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return j(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return j(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Q(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return j(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(n,r,a,i){var o=function(n,r){t(1,arguments);var a=e(n),i=nt(a,r).getTime()-at(a,r).getTime();return Math.round(i/it)+1}(n,i);return"wo"===r?a.ordinalNumber(o,{unit:"week"}):j(o,r.length)},I:function(n,r,a){var i=function(n){t(1,arguments);var r=e(n),a=V(r).getTime()-tt(r).getTime();return Math.round(a/et)+1}(n);return"Io"===r?a.ordinalNumber(i,{unit:"week"}):j(i,r.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):B(t,e)},D:function(n,r,a){var i=function(n){t(1,arguments);var r=e(n),a=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var i=r.getTime(),o=a-i;return Math.floor(o/_)+1}(n);return"Do"===r?a.ordinalNumber(i,{unit:"dayOfYear"}):j(i,r.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return j(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return j(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return j(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return G(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):R(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):j(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):j(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):$(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):J(t,e)},S:function(t,e){return Z(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return ut(a);case"XXXX":case"XX":return st(a);case"XXXXX":case"XXX":default:return st(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return ut(a);case"xxxx":case"xx":return st(a);case"xxxxx":case"xxx":default:return st(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ot(a,":");case"OOOO":default:return"GMT"+st(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ot(a,":");case"zzzz":default:return"GMT"+st(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return j(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return j((r._originalDate||t).getTime(),e.length)}};function ct(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function lt(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const ht={p:lt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return ct(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",ct(a,e)).replace("{{time}}",lt(i,e))}};function mt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var ft=["D","DD"],gt=["YY","YYYY"];function wt(t){return-1!==ft.indexOf(t)}function vt(t){return-1!==gt.indexOf(t)}function yt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var bt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Tt=/^'([^]*?)'?$/,Ct=/''/g,Dt=/[a-zA-Z]/;function kt(n,r,i){t(2,arguments);var o=String(r),u=i||{},s=u.locale||H,d=s.options&&s.options.firstWeekContainsDate,c=null==d?1:a(d),l=null==u.firstWeekContainsDate?c:a(u.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,m=null==h?0:a(h),f=null==u.weekStartsOn?m:a(u.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var g=e(n);if(!E(g))throw new RangeError("Invalid time value");var w=mt(g),v=I(g,w),y={firstWeekContainsDate:l,weekStartsOn:f,locale:s,_originalDate:g},b=o.match(pt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ht[e])(t,s.formatLong,y):t})).join("").match(bt).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return Mt(t);var a=dt[e];if(a)return!u.useAdditionalWeekYearTokens&&vt(t)&&yt(t,r,n),!u.useAdditionalDayOfYearTokens&&wt(t)&&yt(t,r,n),a(v,t,s.localize,y);if(e.match(Dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return b}function Mt(t){return t.match(Tt)[1].replace(Ct,"'")}const xt=(()=>{let t;const e=()=>{currentTitle.textContent="Inbox",N(),t=D,Ut.removeChildren(),Ut.iterateTaskDisplay(t)},n=()=>{currentTitle.textContent="Today",t=k,Ut.removeChildren(),Ut.iterateTaskDisplay(t)},r=()=>{currentTitle.textContent="Weekly",t=M,Ut.removeChildren(),Ut.iterateTaskDisplay(t)},a=()=>{currentTitle.textContent="Monthly",t=x,Ut.removeChildren(),Ut.iterateTaskDisplay(t)},i=()=>{currentTitle.textContent="Important",t=U,Ut.removeChildren(),Ut.iterateTaskDisplay(t)};return inbox.addEventListener("click",(()=>{e()})),today.addEventListener("click",(()=>{n()})),week.addEventListener("click",(()=>{r()})),month.addEventListener("click",(()=>{a()})),important.addEventListener("click",(()=>{i()})),{showInbox:e,showDaily:n,showWeekly:r,showMonthly:a,showImportant:i}})(),Ut=(addTask.addEventListener("click",(()=>{taskModal.style.display="flex"})),closeBtn.onclick=function(){taskModal.style.display="none"},submitTask.addEventListener("click",(()=>{if(""===submitTitle.value)return void alert("Task must have a title");if(""===modaldateinput.value)return void alert("Please enter a due date for this task");let n=kt(c(modaldateinput.value),"MM/dd/yyyy"),r=kt(new Date,"MM/dd/yyyy");if(!0===function(n,r){t(2,arguments);var a=e(n),i=e(r);return a.getTime()<i.getTime()}(new Date(n),new Date(r)))return void alert("This due date occurs before todays date");N();const a=new P(`${submitTitle.value}`,`${submitNotes.value}`,`${submitPriority.value}`,`${modaldateinput.value}`,`${D.length}`);D.push(a),S(a),D=localStorage.setItem("inboxArray",JSON.stringify(D)),submitTitle.value="",submitNotes.value="",modaldateinput.value="",taskModal.style.display="none",Ut.displayNewlyCreatedTask(currentTitle.textContent)})),(()=>{const t=(t,e,n,r)=>{let a=document.createElement("div");a.classList.add("task"),a.setAttribute("id",`${r}`);let i=document.createElement("label");i.classList.add("checkbox-label");let o=document.createElement("input");o.setAttribute("type","checkbox"),i.appendChild(o);let u=document.createElement("span");u.classList.add("checkbox-custom"),i.appendChild(u);let s=document.createElement("div");s.setAttribute("id","taskTitle"),s.textContent=`${t}`;let d=document.createElement("div");d.setAttribute("id","taskNotes"),d.textContent="Notes:";let c=document.createElement("div");c.setAttribute("id","notes"),c.textContent=`${e}`;let l=document.createElement("div");l.setAttribute("id","dueDate"),l.textContent="Due Date:";let h=document.createElement("input");h.setAttribute("type","date"),h.setAttribute("id","date"),h.value=`${n}`,a.appendChild(i),a.appendChild(s),a.appendChild(d),d.appendChild(c),a.appendChild(l),l.appendChild(h),taskContainer.appendChild(a)};return{removeChildren:()=>{for(;taskContainer.lastElementChild;)taskContainer.removeChild(taskContainer.lastElementChild)},showTaskUI:t,iterateTaskDisplay:e=>{e.forEach((e=>{t(e.title,e.notes,e.dueDate,e.taskID)}))},displayNewlyCreatedTask:t=>{"Inbox"===t?xt.showInbox():"Today"===t?xt.showDaily():"Weekly"===t?xt.showWeekly():"Monthly"===t?xt.showMonthly():"Important"===t&&xt.showImportant()}}})());console.log("webpack worked"),window.localStorage,N(),D.forEach((t=>{S(t)})),Ut.iterateTaskDisplay(D)})();