import { inboxArray } from './TaskFunctions.js';

function storeTasks() {
    inboxArray = localStorage.setItem('inboxArray', JSON.stringify(inboxArray));
    return inboxArray;
};

function retrieveTasks() {
    inboxArray = JSON.parse(localStorage.getItem('inboxArray'));
    console.log(inboxArray)
    
};

export {
    storeTasks,
    retrieveTasks
};