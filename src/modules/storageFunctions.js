import {
    inboxArray,
    dailyArray,
    weeklyArray,
    monthlyArray,
    importantArray,
} from './taskFunctions.js'

function storeTasks() {
    localStorage.setItem('inboxArray', JSON.stringify(inboxArray));
    localStorage.setItem('dailyArray', JSON.stringify(dailyArray));
    localStorage.setItem('weeklyArray', JSON.stringify(weeklyArray));
    localStorage.setItem('monthlyArray', JSON.stringify(monthlyArray));
    localStorage.setItem('importantArray', JSON.stringify(importantArray));
};

function retrieveTasks() {
    inboxArray = localStorage.getItem('inboxArray');
    dailyArray = localStorage.getItem('dailyArray');
    weeklyArray = localStorage.getItem('weeklyArray');
    monthlyArray = localStorage.getItem('monthlyArray');
    importantArray = localStorage.getItem('importantArray');
};

export {
    storeTasks,
    retrieveTasks
};