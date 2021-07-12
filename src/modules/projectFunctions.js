let projectArray = [];

class createProject {
    constructor(title, projectID, completed, projectTaskList) {
        this.title = title;
        this.projectID = projectID;
        this.completed = completed;
        this.projectTaskList = projectTaskList;
    };

    getTitle() {
        return this.title;
    };

    createProjectID() {
        console.log('hi');
        return this.projectID;
    };

    makeProjectTaskArray() {
        projectTaskList = [];
        return this.projectTaskList;
    }
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

    /*saveProjectTaskArray(projectTaskNew) {
        projectTaskNew = localStorage.setItem('projectTaskNew', JSON.stringify(projectTaskNew));
        return this.projectTaskList
    }

    getProjectTaskArray(projectTask) {
        projectTask = JSON.parse(localStorage.getItem(`${this.projectTaskList}`));
        return this.projectTask;
    }

    addTasktoProjectArray(projectTask) {
        projectTaskList.push(projectTask);
        projectTask = localStorage.setItem(this.projectTaskList, JSON.stringify(this.projectTaskList));
        return this.projectTask;
    }*/
};

export { createProject, createProjectTask, projectArray };