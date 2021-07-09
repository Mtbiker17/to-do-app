import { isThisISOWeek } from "date-fns";

let projectArray = [];

class createProject {
    constructor(title, projectID, completed, taskList) {
        this.title = title;
        this.projectID = projectID;
        this.completed = completed;
        this.taskList = taskList;
    };

    getTitle() {
        return this.title;
    };

    createProjectID() {
        return this.projectID;
    };

    checkCompleted() {
        return this.completed;
    };

    makeTaskArray() {
        let taskList = []
        taskList = localStorage.setItem(`${this.title}`, JSON.stringify(`${this.title}`));
        return this.taskList;
    };
};

class createProjectTask {
    constructor(title, notes) {
        this.title = title
        this.notes = notes;
    }

    getProjectTaskTitle() {
        return this.title;
    }

    getProjectTaskNotes() {
        return this.notes;
    }
};

export { createProject, createProjectTask, projectArray };