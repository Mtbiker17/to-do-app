import {
    createTask,
    organizeTaskArray,
    valid,
    taskCheck,
    inboxArray,
    dailyArray,
    weeklyArray,
    monthlyArray,
    importantArray,
} from './TaskFunctions.js';

import {
    storeTasks,
    retrieveTasks
} from './storageFunctions.js'

function initializeHomepage() {
    retrieveTasks();
};

const navbarButtonController = (() => {
    inbox.addEventListener('click', () => {
        currentTitle.textContent = 'Inbox'
    });
    today.addEventListener('click', () => {
        currentTitle.textContent = 'Today'
    });
    week.addEventListener('click', () => {
        currentTitle.textContent = 'Weekly'
    });
    month.addEventListener('click', () => {
        currentTitle.textContent = 'Monthly'
    });
    important.addEventListener('click', () => {
        currentTitle.textContent = 'Important'
    });
})();

const taskModalController = (() => {
    addTask.addEventListener('click', () => {
        taskModal.style.display = 'flex';
    });

    closeBtn.onclick = function () {
        taskModal.style.display = "none";
    };

    const clearInfo = () => {
        submitTitle.value = '';
        submitNotes.value = '';
        modaldateinput.value = '';
        taskModal.style.display = 'none';
    };

    submitTask.addEventListener('click', () => {
        taskCheck(submitTitle.value, modaldateinput.value);
        retrieveTasks();
        if (valid === false) {
            return;
        }
        const task = new createTask(`${submitTitle.value}`, `${submitNotes.value}`,
            `${submitPriority.value}`, `${modaldateinput.value}`, `${inboxArray.length}`)
        organizeTaskArray(task);
        inboxArray.push(task);
        //need to refactor to not allow push to inbox array when taskcheck is not valid.
        storeTasks();
        clearInfo();
    });
})();

function showTaskUI(title, notes, date, id) {
    let task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('id', `${id}`);

    let taskTitle = document.createElement('div');
    taskTitle.setAttribute('id', 'taskTitle');
    taskTitle.textContent = `${title}`;

    let taskNotes = document.createElement('div');
    taskNotes.setAttribute('id', 'taskNotes');
    taskNotes.textContent = 'Notes:'

    let notesContent = document.createElement('div');
    notesContent.setAttribute('id', 'notes');
    notesContent.textContent = `${notes}`

    let dueDate = document.createElement('div')
    dueDate.setAttribute('id', 'dueDate');
    dueDate.textContent = `Due Date:`;

    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.value = `${date}`;

    task.appendChild(taskTitle);
    task.appendChild(taskNotes);
    taskNotes.appendChild(notesContent);
    task.appendChild(dueDate);
    dueDate.appendChild(dateInput);
    taskContainer.appendChild(task);
};


export {
    initializeHomepage,
}