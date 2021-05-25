//factory for task creation
class createTask {
    constructor(title, dueDate, priority, notes) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
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
}

export {
    createTask,
};
