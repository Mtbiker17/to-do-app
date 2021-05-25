import { isToday } from 'date-fns';
import { createTask, submitTask } from './TaskFunctions.js';

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

})();

//testing task factory
const taskbro = new createTask('Mow', '', '', '')
console.log(taskbro)

export {
    initializeHomepage,
}

