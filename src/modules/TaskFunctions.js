//class for task creation
class createTask {
    constructor(title, notes, priority, dueDate, taskID) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.taskID = taskID
    }

    getTitle() {
        return this.title;
    }

    setDueDate() {
        return this.dueDate;
    }

    setPriority() {
        return this.priority;
    }

    addNotes() {
        return this.notes;
    }

    createTaskID() {
        return this.taskID;
    }
}

const taskArray = [];

export {
    createTask,
    taskArray
};
