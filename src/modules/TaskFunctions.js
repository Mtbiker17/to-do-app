import {
    isToday,
    isThisWeek,
    isThisMonth,
    parseISO,
} from 'date-fns';

let inboxArray = [];
let dailyArray = [];
let weeklyArray = [];
let monthlyArray = [];
let importantArray = [];

class createTask {
    constructor(title, notes, priority, dueDate, taskID, completed) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.taskID = taskID;
        this.completed = completed
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

    checkCompleted() {
        return this.completed;
    };
};

function organizeTaskArray(task) {
    if (isToday(parseISO(task.dueDate)) === true) {
        dailyArray.push(task);
    };

    if (isThisWeek(parseISO(task.dueDate)) === true) {
        weeklyArray.push(task);
    };

    if (isThisMonth(parseISO(task.dueDate)) === true) {
        monthlyArray.push(task);
    };

    if (task.priority === 'Important') {
        importantArray.push(task);
    };
    return {dailyArray, weeklyArray, monthlyArray, importantArray}
};

function updateTaskArrays(checked, id, inboxArray) {
    inboxArray.forEach(task => {
        if (isToday(parseISO(task.dueDate)) === true && checked === true) {
            dailyArray[id].completed = true
        } else if (isToday(parseISO(task.dueDate)) === true && checked === false){
            dailyArray[id].completed = false;
        }

        if (isThisWeek(parseISO(task.dueDate)) === true && checked === true) {
            weeklyArray[id].completed = true;
        } else if (isThisWeek(parseISO(task.dueDate)) === true && checked === false){
            weeklyArray[id].completed = false
        }

        if (isThisMonth(parseISO(task.dueDate)) === true && checked == true) {
            monthlyArray[id].completed = true;
        } else if(isThisMonth(parseISO(task.dueDate)) === true && checked === false){
            monthlyArray[id].completed = false;
        }

        if (task.priority === 'Important' && checked === true) {
            importantArray[id].completed = true;
        } else if(task.priority === 'Important' && checked === false){
            importantArray[id].completed = false;
        }
    });
    return {dailyArray, weeklyArray, monthlyArray, importantArray}
}

/*
function removeCompletedTasks(array) {
    array.forEach(task => {
        if(task.completed === true) {
            inboxArray.splice(task, 1);
            storeTasks();
        }
    });
    initializeHomepage();
};
*/

export {
    createTask,
    organizeTaskArray,
    updateTaskArrays,
    inboxArray,
    dailyArray,
    weeklyArray,
    monthlyArray,
    importantArray,
};
