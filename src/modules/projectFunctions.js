let projectArray = [];

class CreateProject {
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
    console.log("hi");
    return this.projectID;
  }

  makeProjectTaskArray() {
    // eslint-disable-next-line no-undef
    projectTaskList = [];
    return this.projectTaskList;
  }
}

class CreateProjectTask {
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

export { CreateProject, CreateProjectTask, projectArray };
