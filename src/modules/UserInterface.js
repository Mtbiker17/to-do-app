import { createTask, organizeTaskArray } from './TaskFunctions.js';

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
        let date = modaldateinput.value;
        const task = new createTask(`${submitTitle.value}`, `${submitNotes.value}`,
        `${submitPriority.value}`, `${modaldateinput.value}`)
        organizeTaskArray(date, task);
        taskModal.style.display = 'none';
    });

})();


export {
    initializeHomepage,
}

