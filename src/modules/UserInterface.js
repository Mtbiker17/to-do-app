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
    inboxArray.forEach(savedTask => {
        organizeTaskArray(savedTask);
    })
};

const navbarButtonController = (() => {
    let arr;
    inbox.addEventListener('click', () => {
        currentTitle.textContent = 'Inbox'
        arr = inboxArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(arr);
    });

    today.addEventListener('click', () => {
        currentTitle.textContent = 'Today'
        arr = dailyArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(arr);
    });

    week.addEventListener('click', () => {
        currentTitle.textContent = 'Weekly'
        arr = weeklyArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(arr);
    });

    month.addEventListener('click', () => {
        currentTitle.textContent = 'Monthly'
        arr = monthlyArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(arr);
    });

    important.addEventListener('click', () => {
        currentTitle.textContent = 'Important'
        arr = importantArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(arr);
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
        };
        const task = new createTask(`${submitTitle.value}`, `${submitNotes.value}`,
            `${submitPriority.value}`, `${modaldateinput.value}`, `${inboxArray.length}`)
        organizeTaskArray(task);
        inboxArray.push(task);
        storeTasks();
        clearInfo();
    });
})();

const displayFunctions = (() => {
    const removeChildren = () => {
        while (taskContainer.lastElementChild) {
            taskContainer.removeChild(taskContainer.lastElementChild);
        }
    };

    const showTaskUI = (title, notes, date, id) => {
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

    const iterateTaskDisplay = (arr) => {
        arr.forEach(arr => {
            showTaskUI(arr.title, arr.notes, arr.dueDate, arr.id);
        });
    };

    return { removeChildren, showTaskUI, iterateTaskDisplay }
})();

export {
    initializeHomepage,
};