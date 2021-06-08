import {
    isToday,
    isBefore,
    parseISO,
    isThisWeek,
    isThisMonth,
    format
} from 'date-fns';

import { storeTasks } from './storageFunctions.js';

let inboxArray = [];
let dailyArray = [];
let weeklyArray = [];
let monthlyArray = [];
let importantArray = [];
let valid = true;

class createTask {
    constructor(title, notes, priority, dueDate, taskID) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.taskID = taskID;
    };

    getTitle() {
        return this.title;
    };

    setDueDate() {
        return this.dueDate;
    };

    setPriority() {
        return this.priority;
    };

    addNotes() {
        return this.notes;
    };

    createTaskID() {
        return this.id;
    };
};

//need to make a function to reorganize arrays based on their dates
// might need to refactor task organizing function
const organizeArrayOnload = (() => {
    window.onload = () => {

    }
})();

function taskCheck(title, dueDate) {
    if (title === '') {
        alert("Task must have a title");
        valid = false;
    };

    if (dueDate === '') {
        alert('Please enter a due date for this task')
        valid = false;
    };

    let date = format(parseISO(dueDate), 'MM/dd/yyyy');
    let currentDate = format(new Date(), 'MM/dd/yyyy');

    if (isBefore(new Date(date), new Date(currentDate)) === true) {
        alert('This due date occurs before todays date');
        valid = false;
    };
    return valid
};

function organizeTaskArray(task) {
    if (task.title === '') {
        return;
    };
    if (isToday(parseISO(task.dueDate)) === true) {
        dailyArray.push(task);
        console.log('daily', dailyArray);
    };

    if (isThisWeek(parseISO(task.dueDate)) === true) {
        weeklyArray.push(task);
        console.log('weekly', weeklyArray);
    };

    if (isThisMonth(parseISO(task.dueDate)) === true) {
        monthlyArray.push(task);
        console.log('monthly', monthlyArray);
    };

    if (task.priority === 'Important') {
        importantArray.push(task);
        console.log('important', importantArray);
    };
};

export {
    createTask,
    organizeTaskArray,
    valid,
    inboxArray,
    dailyArray,
    weeklyArray,
    monthlyArray,
    importantArray,
    taskCheck
};

//datefns useful functions 

//addDays - Add the specified number of days to the given date.
//addWeeks - Add the specified number of week to the given date.
//isThisWeeks - Is the given date in the same week as the current date?
//addMonths - Add the specified number of months to the given date.
//isSameMonth - Are the given dates in the same month?
//isThisMonth - Is the given date in the same month as the current date?
//add - Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
//format - format the date
//isBefore - Is the first date before the second one?
//isDate - Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
//isEqual - Are the given dates equal?
//sub - Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
//compareAsc - Compare the two dates and return 1 if the first date is after the second, -1 if the first date is before the second or 0 if dates are equal.

/*javascript date functions
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()
*/