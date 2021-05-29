import {
    createTask,
    organizeTaskArray,
    taskArray,
    dailyArray,
    weeklyArray,
    monthlyArray,
    importantArray
} from './TaskFunctions.js';

function initializeHomepage() {

}

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

const modalController = (() => {
    addTask.addEventListener('click', () => {
        taskModal.style.display = 'flex';
    })

    closeBtn.onclick = function () {
        taskModal.style.display = "none";
    };

    const clearInfo = () => {
        submitTitle.value = '';
        submitNotes.value = '';
        submitPriority.value = '';
        modaldateinput.value = '';
        taskModal.style.display = 'none';
    };

    submitTask.addEventListener('click', () => {
        let date = modaldateinput.value;
        const task = new createTask(`${submitTitle.value}`, `${submitNotes.value}`,
            `${submitPriority.value}`, `${modaldateinput.value}`, taskArray.length)
        organizeTaskArray(date, task);
        console.log(taskArray)
        clearInfo();
        createTaskDOM();
    });
})();

function createTaskDOM() {
    let task = document.createElement('div');
    task.setAttribute('id', 'task');
    

    let taskTitle = document.createElement('div');
    taskTitle.setAttribute('id', 'taskTitle');
    taskTitle.textContent = 'Mow the lawn';

    let taskNotes = document.createElement('div');
    taskNotes.setAttribute('id', 'taskNotes');
    taskNotes.textContent = 'Notes:'

    let notes = document.createElement('div');
    notes.setAttribute('id', 'notes');

    let dueDate = document.createElement('div')
    dueDate.setAttribute('id', 'dueDate');
    dueDate.textContent = 'Due Date:'

    let dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');

    task.appendChild(taskTitle);
    task.appendChild(taskNotes);
    taskNotes.appendChild(notes);
    task.appendChild(dueDate);
    dueDate.appendChild(dateInput);
    taskContainer.appendChild(task);
}

export {
    initializeHomepage,
}

