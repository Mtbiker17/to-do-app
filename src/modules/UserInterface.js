import {
    createTask,
    organizeTaskArray,
    taskArray,
    dailyArray,
    weeklyArray,
    monthlyArray,
    importantArray
} from './TaskFunctions.js';
import { isBefore, parseISO, format } from 'date-fns';

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

const taskController = (() => {
    addTask.addEventListener('click', () => {
        taskModal.style.display = 'flex';
    });

    closeBtn.onclick = function () {
        taskModal.style.display = "none";
    };

    const clearInfo = () => {
        submitTitle.value = '';
        submitNotes.value = '';
        submitPriority.value = modaldateinput.value;
        modaldateinput.value = '';
        taskModal.style.display = 'none';
    };

    submitTask.addEventListener('click', () => {
        if (submitTitle.value === '') {
            alert("Task must have a title");
            return;
        };

        //perhaps wrap this in a function
        let date = format(parseISO(modaldateinput.value), 'MM/dd/yyyy');
        let currentDate = format(new Date(), 'MM/dd/yyyy');
        console.log(date, currentDate);

        if (isBefore(new Date(date), new Date(currentDate)) === true) {
            alert('This due date occurs before todays date');
            return;
        };

        const task = new createTask(`${submitTitle.value}`, `${submitNotes.value}`,
            `${submitPriority.value}`, `${modaldateinput.value}`, taskArray.length)
        organizeTaskArray(date, task);
        showTaskUI(task.title, task.notes, task.dueDate, task.id);
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
    return task;
};
//function displayNavTasks {
//if(currentTitle.textContent = "Inbox"){

//  }
//}


export {
    initializeHomepage,
}

