
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

export { createProject };