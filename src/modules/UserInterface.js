/* eslint-disable no-unused-vars */
/* eslint-disable no-import-assign */
/* eslint-disable no-undef */
import {
  CreateTask,
  organizeTaskArray,
  inboxArray,
  dailyArray,
  weeklyArray,
  monthlyArray,
  importantArray,
  updateTaskArrays,
} from "./TaskFunctions.js";

import {
  CreateProject,
  CreateProjectTask,
  projectArray,
} from "./projectFunctions.js";

import {
  storeTasks,
  retrieveTasks,
  storeProjects,
  retrieveProjects,
} from "./storageFunctions.js";

import { format, parseISO, isBefore } from "date-fns";

function initializeHomepage() {
  retrieveTasks();
  retrieveProjects();
  let index = 0;
  let projectIndex = 0;
  inboxArray.forEach((savedTask) => {
    savedTask.taskID = index;
    organizeTaskArray(savedTask);
    index++;
  });
  storeTasks();

  projectArray.forEach((savedProject) => {
    savedProject.projectID = projectIndex;
    projectIndex++;
    storeProjects(projectArray);
  });

  displayFunctions.iterateTaskDisplay(inboxArray);
  displayFunctions.iterateTaskDisplay(projectArray);
}

const navbarButtonController = (() => {
  let array;
  const showInbox = () => {
    currentTitle.textContent = "Inbox";
    addTask.style.visibility = "visible";
    projectTaskContainer.style.visibility = "hidden";
    remove.textContent = "Remove Completed Tasks";
    retrieveTasks();
    array = inboxArray;
    displayFunctions.removeChildren();
    displayFunctions.iterateTaskDisplay(array);
  };

  const showDaily = () => {
    currentTitle.textContent = "Today";
    addTask.style.visibility = "visible";
    projectTaskContainer.style.visibility = "hidden";
    remove.textContent = "Remove Completed Tasks";
    array = dailyArray;
    displayFunctions.removeChildren();
    displayFunctions.iterateTaskDisplay(array);
  };

  const showWeekly = () => {
    currentTitle.textContent = "Weekly";
    addTask.style.visibility = "visible";
    projectTaskContainer.style.visibility = "hidden";
    remove.textContent = "Remove Completed Tasks";
    array = weeklyArray;
    displayFunctions.removeChildren();
    displayFunctions.iterateTaskDisplay(array);
  };

  const showMonthly = () => {
    currentTitle.textContent = "Monthly";
    addTask.style.visibility = "visible";
    projectTaskContainer.style.visibility = "hidden";
    remove.textContent = "Remove Completed Tasks";
    array = monthlyArray;
    displayFunctions.removeChildren();
    displayFunctions.iterateTaskDisplay(array);
  };

  const showImportant = () => {
    currentTitle.textContent = "Important";
    addTask.style.visibility = "visible";
    projectTaskContainer.style.visibility = "hidden";
    remove.textContent = "Remove Completed Tasks";
    array = importantArray;
    displayFunctions.removeChildren();
    displayFunctions.iterateTaskDisplay(array);
  };

  const showProjects = () => {
    retrieveProjects();
    currentTitle.textContent = "Projects";
    addTask.style.visibility = "hidden";
    remove.textContent = "Remove Completed Tasks";
    array = projectArray;
    displayFunctions.removeProjectChildren();
    displayFunctions.removeChildren();
    displayFunctions.iterateTaskDisplay(array);
  };

  inbox.addEventListener("click", () => {
    showInbox();
  });

  today.addEventListener("click", () => {
    showDaily();
  });

  week.addEventListener("click", () => {
    showWeekly();
  });

  month.addEventListener("click", () => {
    showMonthly();
  });

  important.addEventListener("click", () => {
    showImportant();
  });

  arrow.addEventListener("click", () => {
    showProjects();
  });

  return {
    showInbox,
    showDaily,
    showWeekly,
    showMonthly,
    showImportant,
    showProjects,
  };
})();

const taskModalController = (() => {
  addTask.addEventListener("click", () => {
    taskModal.style.display = "flex";
  });

  closeBtn.onclick = () => {
    taskModal.style.display = "none";
  };

  const clearInfo = () => {
    submitTitle.value = "";
    submitNotes.value = "";
    modaldateinput.value = "";
    taskModal.style.display = "none";
  };

  submitTask.addEventListener("click", () => {
    if (submitTitle.value === "") {
      alert("Task must have a title");
      return;
    }

    if (modaldateinput.value === "") {
      alert("Please enter a due date for this task");
      return;
    }

    const date = format(parseISO(modaldateinput.value), "MM/dd/yyyy");
    const currentDate = format(new Date(), "MM/dd/yyyy");

    if (isBefore(new Date(date), new Date(currentDate)) === true) {
      alert("This due date occurs before todays date");
      return;
    }

    retrieveTasks();
    const task = new CreateTask(
      `${submitTitle.value}`,
      `${submitNotes.value}`,
      `${submitPriority.value}`,
      `${modaldateinput.value}`,
      `${inboxArray.length}`,
      false
    );
    inboxArray.push(task);
    organizeTaskArray(task);
    storeTasks(inboxArray);
    clearInfo();
    displayFunctions.refreshTasksUI(currentTitle.textContent);
  });
})();

const projectModalController = (() => {
  addProject.addEventListener("click", () => {
    projectModal.style.display = "flex";
    projectTaskContainer.style.visibility = "hidden";
    navbarButtonController.showProjects();
  });

  projectTaskCloseBtn.onclick = () => {
    projectTaskModal.style.display = "none";
  };

  projectCloseBtn.onclick = () => {
    projectModal.style.display = "none";
  };

  const clearProjectInfo = () => {
    submitProject.value = "";
    projectModal.style.display = "none";
  };

  const clearProjectTaskInfo = () => {
    projectTaskTitle.value = "";
    projectTaskNotes.value = "";
    projectTaskModal.style.display = "none";
  };

  submitProject.addEventListener("click", () => {
    if (submitProjectTitle.value === "") {
      alert("Project must have a title");
      return;
    }
    projectsContainer.style.visibility = "hidden";
    arrow.classList.remove("arrowDown");
    if (projectsContainer.style.visibility !== "visible") {
      arrow.classList.add("arrowDown");
      projectsContainer.style.visibility = "visible";
    } else {
      projectsContainer.style.visibility = "hidden";
    }
    retrieveProjects();
    const project = new CreateProject(
      `${submitProjectTitle.value}`,
      `${projectArray.length}`,
      false,
      []
    );
    projectArray.push(project);
    storeProjects(projectArray);
    clearProjectInfo();
    displayFunctions.refreshTasksUI(currentTitle.textContent);
    console.log(projectArray);
  });

  submitProjectTask.addEventListener("click", () => {
    const projectID = document.getElementsByClassName("projectTitleDisplay")[0]
      .id;
    if (projectTaskTitle.value === "") {
      alert("Please give task a title");
      return;
    }
    const projectTaskNew = new CreateProjectTask(
      projectTaskTitle.value,
      projectTaskNotes.value,
      projectArray[projectID].projectTaskList.length,
      projectID,
      false
    );
    projectArray[projectID].projectTaskList.push(projectTaskNew);
    storeProjects(projectArray);
    clearProjectTaskInfo();
    displayFunctions.removeProjectTaskChildren();
    projectArray[projectID].projectTaskList.forEach((task) => {
      displayFunctions.showProjectTaskUI(
        task.title,
        task.notes,
        task.projectTaskID,
        task.projID,
        task.completed
      );
    });
  });

  return { clearProjectInfo };
})();

const displayFunctions = (() => {
  const removeChildren = () => {
    while (taskContainer.lastElementChild) {
      taskContainer.removeChild(taskContainer.lastElementChild);
    }
  };

  const removeProjectChildren = () => {
    while (projectsContainer.lastElementChild) {
      projectsContainer.removeChild(projectsContainer.lastElementChild);
    }
  };

  const removeProjectTaskChildren = () => {
    while (projectTaskContainer.lastElementChild) {
      projectTaskContainer.removeChild(projectTaskContainer.lastElementChild);
    }
  };

  const resetArrays = () => {
    dailyArray = [];
    weeklyArray = [];
    monthlyArray = [];
    importantArray = [];
  };

  const refreshTasksUI = (nav) => {
    if (nav === "Inbox") {
      removeChildren();
      navbarButtonController.showInbox();
    } else if (nav === "Today") {
      removeChildren();
      navbarButtonController.showDaily();
    } else if (nav === "Weekly") {
      removeChildren();
      navbarButtonController.showWeekly();
    } else if (nav === "Monthly") {
      removeChildren();
      navbarButtonController.showMonthly();
    } else if (nav === "Important") {
      removeChildren();
      navbarButtonController.showImportant();
    } else if (nav === "Projects") {
      taskButtonContainer.style.visibility = "visible";
      navbarButtonController.showProjects();
    }
  };

  const showTaskUI = (title, notes, date, id, checked, priority) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("id", `${id}`);

    const checkbox = document.createElement("label");
    checkbox.classList.add("checkbox-label");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    checkbox.appendChild(input);
    const span = document.createElement("span");
    span.classList.add("checkbox-custom");
    checkbox.appendChild(span);

    const taskTitle = document.createElement("div");
    taskTitle.setAttribute("id", "taskTitle");
    taskTitle.textContent = title;

    const taskNotes = document.createElement("div");
    taskNotes.setAttribute("id", "taskNotes");
    taskNotes.textContent = "Notes:";

    const notesContent = document.createElement("div");
    notesContent.setAttribute("id", "notes");
    notesContent.textContent = notes;

    const dueDate = document.createElement("div");
    dueDate.setAttribute("id", "dueDate");
    dueDate.textContent = "Due Date:";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", id);
    dateInput.value = `${date}`;

    dateInput.addEventListener("change", () => {
      const newDate = dateInput.value;
      const inputID = dateInput.id;
      inboxArray[inputID].dueDate = newDate;
      resetArrays();
      storeTasks(inboxArray);
      inboxArray.forEach((task) => {
        organizeTaskArray(task);
      });
      displayFunctions.refreshTasksUI(currentTitle.textContent);
    });

    task.appendChild(checkbox);
    task.appendChild(taskTitle);
    task.appendChild(taskNotes);
    taskNotes.appendChild(notesContent);
    task.appendChild(dueDate);
    dueDate.appendChild(dateInput);
    taskContainer.appendChild(task);

    if (checked === true) {
      taskTitle.style.textDecoration = "line-through";
      input.checked = true;
    } else if (checked === false) {
      input.checked = false;
      taskTitle.style.textDecoration = "none";
    }
    if (priority === "Important") {
      taskTitle.classList.add("pseudoImportant");
    }

    input.addEventListener("click", () => {
      retrieveTasks();
      if (input.checked === true) {
        inboxArray[id].completed = true;
        taskTitle.style.textDecoration = "line-through";
        storeTasks(inboxArray);
        updateTaskArrays(true, inboxArray, id);
      } else if (input.checked === false) {
        inboxArray[id].completed = false;
        taskTitle.style.textDecoration = "none";
        storeTasks(inboxArray);
        updateTaskArrays(false, inboxArray, id);
      }
    });
  };

  const showProjectUI = (title, projectID, checked) => {
    const projectList = document.createElement("div");
    projectList.setAttribute("id", projectID);
    projectList.classList.add("projectList");

    const projectCheckbox = document.createElement("label");
    projectCheckbox.classList.add("checkbox-label");
    const projectInput = document.createElement("input");
    projectInput.setAttribute("type", "checkbox");
    projectCheckbox.appendChild(projectInput);
    const projectSpan = document.createElement("span");
    projectSpan.classList.add("checkbox-custom");
    projectSpan.style.marginTop = "5px";
    projectCheckbox.appendChild(projectSpan);

    const projectTitle = document.createElement("div");
    projectTitle.setAttribute("id", projectID);
    projectTitle.textContent = title;
    projectTitle.classList.add("projectTitle");

    projectList.appendChild(projectCheckbox);
    projectList.appendChild(projectTitle);
    projectsContainer.appendChild(projectList);

    if (checked === true) {
      projectInput.checked = true;
      projectTitle.style.textDecoration = "line-through";
    } else if (checked === false) {
      projectInput.checked = false;
      projectTitle.style.textDecoration = "none";
    }

    projectInput.addEventListener("click", () => {
      retrieveProjects();
      if (projectInput.checked === true) {
        projectArray[projectID].completed = true;
        projectTitle.style.textDecoration = "line-through";
        storeProjects(projectArray);
        refreshTasksUI(currentTitle.textContent);
      } else if (projectInput.checked === false) {
        projectArray[projectID].completed = false;
        projectTitle.style.textDecoration = "none";
        storeProjects(projectArray);
        refreshTasksUI(currentTitle.textContent);
      }
    });

    projectList.addEventListener("click", () => {
      taskButtonContainer.style.visibility = "visible";
      projectTaskContainer.style.visibility = "visible";
      navbarButtonController.showProjects();
      displayFunctions.removeProjectTaskChildren();

      const projectTitleDisplay = document.createElement("div");
      const addProjectTask = document.createElement("div");

      addProjectTask.classList.add("taskControl");
      addProjectTask.setAttribute("id", `${projectID}`);
      addProjectTask.setAttribute("id", "addProjectTask");
      addProjectTask.textContent = "Add Project Task";

      projectTitleDisplay.classList.add("projectTitleDisplay");
      projectTitleDisplay.setAttribute("id", `${projectID}`);
      projectTitleDisplay.textContent = title;

      taskContainer.appendChild(projectTitleDisplay);
      taskContainer.appendChild(addProjectTask);

      projectArray[projectList.id].projectTaskList.forEach((task) => {
        displayFunctions.showProjectTaskUI(
          task.title,
          task.notes,
          task.projectTaskID,
          task.projID,
          task.completed
        );
      });

      addProjectTask.addEventListener("click", () => {
        projectTaskModal.style.display = "flex";
      });
    });
  };

  const showProjectTaskUI = (
    projTitle,
    projNotes,
    projTaskID,
    projID,
    checked
  ) => {
    const pTask = document.createElement("div");
    pTask.classList.add("task");
    pTask.setAttribute("id", `${projTaskID}`);

    const pTaskCheckbox = document.createElement("label");
    pTaskCheckbox.classList.add("checkbox-label");
    const pTaskInput = document.createElement("input");
    pTaskInput.setAttribute("type", "checkbox");
    pTaskCheckbox.appendChild(pTaskInput);
    const pTaskSpan = document.createElement("span");
    pTaskSpan.classList.add("checkbox-custom");
    pTaskCheckbox.appendChild(pTaskSpan);

    const pTitle = document.createElement("div");
    pTitle.setAttribute("id", "taskTitle");
    pTitle.textContent = projTitle;

    const pNotes = document.createElement("div");
    pNotes.setAttribute("id", "taskNotes");
    pNotes.textContent = "Notes:";

    const pNotesContent = document.createElement("div");
    pNotesContent.setAttribute("id", "notes");
    pNotesContent.textContent = projNotes;

    pTask.appendChild(pTaskCheckbox);
    pTask.appendChild(pTitle);
    pTask.appendChild(pNotes);
    projectTaskContainer.appendChild(pTask);

    if (checked === true) {
      pTaskInput.checked = true;
      pTitle.style.textDecoration = "line-through";
    } else if (checked === false) {
      pTaskInput.checked = false;
      pTitle.style.textDecoration = "none";
    }

    pTaskInput.addEventListener("click", () => {
      retrieveProjects();
      const id = document.getElementsByClassName("projectTitleDisplay")[0].id;
      if (pTaskInput.checked === true) {
        projectArray[id].projectTaskList[projTaskID].completed = true;
        pTitle.style.textDecoration = "line-through";
        storeProjects(projectArray);
      } else if (pTaskInput.checked === false) {
        projectArray[id].projectTaskList[projTaskID].completed = false;
        pTitle.style.textDecoration = "none";
        storeProjects(projectArray);
      }
    });
  };

  const iterateTaskDisplay = (arr) => {
    if (arr === projectArray) {
      arr.forEach((element) => {
        showProjectUI(element.title, element.projectID, element.completed);
      });
      return;
    }
    arr.forEach((element) => {
      showTaskUI(
        element.title,
        element.notes,
        element.dueDate,
        element.taskID,
        element.completed,
        element.priority
      );
    });
  };

  remove.addEventListener("click", () => {
    retrieveTasks();
    retrieveProjects();
    inboxArray.forEach((task) => {
      if (task.completed === true) {
        inboxArray.splice(task.taskID, 1);
      }
    });

    projectArray.forEach((projectTask) => {
      if (projectTask.completed === true) {
        projectArray.splice(projectTask.projectID, 1);
      }
    });
    storeTasks(inboxArray);
    storeProjects(projectArray);
    location.reload();
  });

  arrow.addEventListener("click", () => {
    arrow.classList.toggle("arrowDown");
    if (projectsContainer.style.visibility !== "visible") {
      projectsContainer.style.visibility = "visible";
    } else {
      projectsContainer.style.visibility = "hidden";
    }
  });

  return {
    removeChildren,
    showTaskUI,
    iterateTaskDisplay,
    refreshTasksUI,
    showProjectUI,
    showProjectTaskUI,
    removeProjectChildren,
    removeProjectTaskChildren,
  };
})();

export { initializeHomepage };
