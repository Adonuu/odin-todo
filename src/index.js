import { project } from "./project";
import { todo } from "./todo";
import { renderProject, renderProjectList } from "./DomRender";
import { readStorage, saveStorage } from "./storage";
import "./index.css";

// read data from local storage
let projects = readStorage();

// render project list on startup
renderProjectList(projects);

// html elements
const createProjectButton = document.querySelector('#createProjectButton');
const createProjectDialog = document.querySelector('#createProjectDialog');
const closeCreateProjectDialog = document.querySelector('#closeCreateProjectDialog');
const createProjectForm = document.querySelector('#createProjectForm');
const createTodoButton = document.querySelector('#createTodo');
const createTodoDialog = document.querySelector('#createTodoDialog');
const closeCreateTodoDialog = document.querySelector('#closeCreateTodoDialog');
const createTodoForm = document.querySelector('#createTodoForm');
const projectSection = document.querySelector('#projectSection');


// show create project dialog when createProjectButton is pressed
createProjectButton.addEventListener('click', () => {
    createProjectDialog.showModal();
});

// close create project dialog when closeCreateProjectDialog is pressed
closeCreateProjectDialog.addEventListener('click', () => {
    createProjectDialog.close();
});

// when create project form is submitted add project to projects list
createProjectForm.addEventListener('submit', (e) => {
    let projectTitle = e.target.querySelector('#projectTitleInput').value;
    let projectToAdd = new project(projectTitle);
    addProjectToProjects(projectToAdd);
    renderProjectList(projects);
    saveStorage(projects);
});

// show create todo dialog when createTodoButton is pressed
createTodoButton.addEventListener('click', () => {
    createTodoDialog.showModal();
});

// close create todo dialog when the closeToDoDialog is pressed
closeCreateTodoDialog.addEventListener('click', () => {
    createTodoDialog.close();
});

// when create todo form is submitted add todo to the project
createTodoForm.addEventListener('submit', (e) => {
    // get current project
    let currentProject = getProject(projectSection.getAttribute('currentProject'));
    // get information from form
    let todoTitle = e.target.querySelector('#todoTitleInput').value;
    let todoPriority = e.target.querySelector('#todoPriorityInput').value;
    let todoDueDate = e.target.querySelector('#todoDueDateInput').value;
    let todoDescription = e.target.querySelector('#todoDescriptionInput').value;
    // create new todo
    let todoToAdd = new todo(todoTitle, todoDescription, todoDueDate, todoPriority);
    // add todo to project
    currentProject.addToDo(todoToAdd);
    // re-render project display
    renderProject(currentProject);
    // re-write data to local storage
   saveStorage(projects);
});

// function used to return the right project to DomRender.js when rendering the content on click of each project in the project list
export function getProject(projectTitle) {
    let returnValue;
    projects.forEach((val) => {
        if (val.getTitle() === projectTitle) {
            returnValue = val;
        }
    });
    return returnValue;
}

function addProjectToProjects(project) {
    // check to see if there is already a project that exists
    let duplicateProject = false;
    projects.forEach((val) => {
        if (val.getTitle === project.getTitle()) {
            duplicateProject = true;
        }
    });
    if (duplicateProject) {
        // throw error
    } else {
        // add project to list
        projects.push(project);
    }
}