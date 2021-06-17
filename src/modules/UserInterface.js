import {
    createTask,
    organizeTaskArray,
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

import {
    format,
    parseISO,
    isBefore
} from 'date-fns';

function initializeHomepage() {
    retrieveTasks();
    inboxArray.forEach(savedTask => {
        organizeTaskArray(savedTask);
    })
    displayFunctions.iterateTaskDisplay(inboxArray);
};

const navbarButtonController = (() => {
    let array;
    const showInbox = () => {
        currentTitle.textContent = 'Inbox'
        retrieveTasks();
        array = inboxArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(array);
    };

    const showDaily = () => {
        currentTitle.textContent = 'Today'
        array = dailyArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(array);
    };

    const showWeekly = () => {
        currentTitle.textContent = 'Weekly'
        array = weeklyArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(array);
    };

    const showMonthly = () => {
        currentTitle.textContent = 'Monthly'
        array = monthlyArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(array);
    };

    const showImportant = () => {
        currentTitle.textContent = 'Important'
        array = importantArray;
        displayFunctions.removeChildren();
        displayFunctions.iterateTaskDisplay(array);
    };

    inbox.addEventListener('click', () => {
        showInbox();
    });

    today.addEventListener('click', () => {
        showDaily();
    });

    week.addEventListener('click', () => {
        showWeekly();
    });

    month.addEventListener('click', () => {
        showMonthly();
    });

    important.addEventListener('click', () => {
        showImportant();
    });

    return { showInbox, showDaily, showWeekly, showMonthly, showImportant };
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
        if (submitTitle.value === '') {
            alert("Task must have a title");
            return;
        };

        if (modaldateinput.value === '') {
            alert('Please enter a due date for this task')
            return;
        };

        let date = format(parseISO(modaldateinput.value), 'MM/dd/yyyy');
        let currentDate = format(new Date(), 'MM/dd/yyyy');

        if (isBefore(new Date(date), new Date(currentDate)) === true) {
            alert('This due date occurs before todays date');
            return;
        };

        retrieveTasks();
        const task = new createTask(`${submitTitle.value}`, `${submitNotes.value}`,
            `${submitPriority.value}`, `${modaldateinput.value}`, `${inboxArray.length}`);
        inboxArray.push(task);
        organizeTaskArray(task);
        storeTasks();
        clearInfo();
        displayFunctions.displayNewlyCreatedTask(currentTitle.textContent);
    });
})();

const displayFunctions = (() => {

    const removeChildren = () => {
        while (taskContainer.lastElementChild) {
            taskContainer.removeChild(taskContainer.lastElementChild);
        }
    };

    const displayNewlyCreatedTask = (nav) => {
        if (nav === 'Inbox') {
            navbarButtonController.showInbox();
        } else if (nav === 'Today') {
            navbarButtonController.showDaily();
        } else if (nav === 'Weekly') {
            navbarButtonController.showWeekly();
        } else if (nav === 'Monthly') {
            navbarButtonController.showMonthly();
        } else if (nav === 'Important') {
            navbarButtonController.showImportant();
        }
    };

    const showTaskUI = (title, notes, date, id) => {
        let task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('id', `${id}`);

        let checkbox = document.createElement('label')
        checkbox.classList.add('checkbox-label');
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        checkbox.appendChild(input);
        let span = document.createElement('span');
        span.classList.add('checkbox-custom');
        checkbox.appendChild(span);
        input.addEventListener('click', () => {
            console.log(input.checked);
        });

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

        task.appendChild(checkbox);
        task.appendChild(taskTitle);
        task.appendChild(taskNotes);
        taskNotes.appendChild(notesContent);
        task.appendChild(dueDate);
        dueDate.appendChild(dateInput);
        taskContainer.appendChild(task);

        return task;
    };

    const iterateTaskDisplay = (arr) => {
        arr.forEach(element => {
            showTaskUI(element.title, element.notes, element.dueDate, element.taskID);
        });
       
    };

    return {
        removeChildren,
        showTaskUI,
        iterateTaskDisplay,
        displayNewlyCreatedTask
    }
})();

export {
    initializeHomepage,
};