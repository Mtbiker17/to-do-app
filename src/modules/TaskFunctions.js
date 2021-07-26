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
    this.completed = completed;
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
  return { dailyArray, weeklyArray, monthlyArray, importantArray };
};

function updateTaskArrays(taskCompleted, inboxArray, id) {
  inboxArray.forEach(task => {
    if (isToday(parseISO(task.dueDate)) === true && taskCompleted === true && task.taskID === id) {
      dailyArray[task.taskID].completed = true;
    }
    if (isToday(parseISO(task.dueDate)) === true && taskCompleted === false && task.taskID === id) {
      dailyArray[task.taskID].completed = false;
    }

    if (isThisWeek(parseISO(task.dueDate)) === true && taskCompleted === true && task.taskID === id) {
      weeklyArray[task.taskID].completed = true;
    }
    if (isThisWeek(parseISO(task.dueDate)) === true && taskCompleted === false && task.taskID === id) {
      weeklyArray[task.taskID].completed = false;
    }

    if (isThisMonth(parseISO(task.dueDate)) === true && taskCompleted == true && task.taskID === id) {
      monthlyArray[task.taskID].completed = true;
    }
    if (isThisMonth(parseISO(task.dueDate)) === true && taskCompleted === false && task.taskID === id) {
      monthlyArray[task.taskID].completed = false;
    }

    if (task.priority === 'Important' && taskCompleted === true && task.taskID === id) {
      importantArray[task.taskID].completed = true;
    }
    if (task.priority === 'Important' && taskCompleted === false && task.taskID === id) {
      importantArray[task.taskID].completed = false;
    }
  });
  return { dailyArray, weeklyArray, monthlyArray, importantArray };
}

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
