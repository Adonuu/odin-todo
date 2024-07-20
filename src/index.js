import { project } from "./project";
import { todo } from "./todo";
import { renderProject, renderProjectList } from "./DomRender";
import "./index.css";

// variable used for storing all the projects
let projects = [];

// html elements
const createProjectButton = document.querySelector('#createProjectButton');
const createProjectDialog = document.querySelector('#createProjectDialog');
const closeCreateProjectDialog = document.querySelector('#closeCreateProjectDialog');
const createProjectForm = document.querySelector('#createProjectForm');

// add functions for storing projects in local storage and recalling it on startup if needed

let testProject = new project('test');
let testNote = new todo('Test Note', 'This is a test note', '5/9/24', 1);

projects.push(testProject);

renderProjectList(projects);

testProject.addToDo(testNote);

renderProject(testProject);


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