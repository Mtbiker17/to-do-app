import { inboxArray } from './TaskFunctions.js';

function storeTasks() {
    inboxArray = localStorage.setItem('inboxArray', JSON.stringify(inboxArray));
    return inboxArray;
};

function retrieveTasks() {
    inboxArray = JSON.parse(localStorage.getItem('inboxArray'));
    if (inboxArray === null) {
        inboxArray = [];
    }
    console.log(inboxArray)
};

export {
    storeTasks,
    retrieveTasks
};