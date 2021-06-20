import { inboxArray } from './TaskFunctions.js';

function storeTasks(array) {
    array = localStorage.setItem('inboxArray', JSON.stringify(inboxArray));
    return array;
};

function retrieveTasks() {
    inboxArray = JSON.parse(localStorage.getItem('inboxArray'));
    if (inboxArray === null) {
        inboxArray = [];
    }
    return inboxArray;
};

export {
    storeTasks,
    retrieveTasks
};