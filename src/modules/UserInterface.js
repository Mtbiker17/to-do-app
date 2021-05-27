import { createTask, taskArray } from './TaskFunctions.js';

function initializeHomepage() {

}

const navbarButtonController = (() => {
    inbox.addEventListener('click', () => {
        currentTitle.textContent = 'Inbox'
    })
    today.addEventListener('click', () => {
        currentTitle.textContent = 'Today'
    })
    week.addEventListener('click', () => {
        currentTitle.textContent = 'Weekly'
    })
    month.addEventListener('click', () => {
        currentTitle.textContent = 'Monthly'
    })
    important.addEventListener('click', () => {
        currentTitle.textContent = 'Important'
    })
})();

const modalController = (() => {
    addTask.addEventListener('click', () => {
        taskModal.style.display = 'flex';
    })
    
    closeBtn.onclick = function () {
        taskModal.style.display = "none";
    }

    submitTask.addEventListener('click', () => {
        const task = new createTask(`${submitTitle.value}`, `${submitNotes.value}`,
        `${submitPriority.value}`, `${modaldateinput.value}`, taskArray.length)
        taskArray.push(task);
        console.log(task);
        console.log(taskArray);
    });

})();


export {
    initializeHomepage,
}

