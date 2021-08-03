/* eslint-disable no-import-assign */
import { inboxArray } from "./TaskFunctions.js";
import { projectArray } from "./projectFunctions.js";

function storeTasks(array) {
  array = localStorage.setItem("inboxArray", JSON.stringify(inboxArray));
  return array;
}

function retrieveTasks() {
  inboxArray = JSON.parse(localStorage.getItem("inboxArray"));
  if (inboxArray === null) {
    inboxArray = [];
  }
  return inboxArray;
}

function storeProjects(projectArray) {
  projectArray = localStorage.setItem(
    "projectArray",
    JSON.stringify(projectArray)
  );
  return projectArray;
}

function retrieveProjects() {
  projectArray = JSON.parse(localStorage.getItem("projectArray"));
  if (projectArray === null) {
    projectArray = [];
  }
  return projectArray;
}

export { storeTasks, retrieveTasks, storeProjects, retrieveProjects };
