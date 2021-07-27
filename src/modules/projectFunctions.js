let projectArray = [];

class createProject {
  constructor(title, projectID, completed, projectTaskList) {
    this.title = title;
    this.projectID = projectID;
    this.completed = completed;
    this.projectTaskList = projectTaskList;
  }

  getTitle() {
    return this.title;
  }

  createProjectID() {
    console.log('hi');
    return this.projectID;
  }

  makeProjectTaskArray() {
    projectTaskList = [];
    return this.projectTaskList;
  }
}

class createProjectTask {
  constructor(title, notes, projectTaskID, projID, completed) {
    this.title = title;
    this.notes = notes;
    this.projectTaskID = projectTaskID;
    this.projID = projID;
    this.completed = completed;
  }

  getProjectTaskTitle() {
    return this.title;
  }

  getProjectTaskNotes() {
    return this.notes;
  }

  getProjectTaskID() {
    return this.projectTaskID;
  }

  getProjectID() {
    return this.projID;
  }

  getCompleted() {
    return this.completed;
  }
}

export { createProject, createProjectTask, projectArray };