import { project } from "./project";
import { todo } from "./todo";
import { renderProject, renderProjectList } from "./DomRender";
import "./index.css";

// variable used for storing all the projects
let projects = [];

// add functions for storing projects in local storage and recalling it on startup if needed

let testProject = new project('test');
let testNote = new todo('Test Note', 'This is a test note', '5/9/24', 1);

projects.push(testProject);

renderProjectList(projects);

testProject.addToDo(testNote);

renderProject(testProject);




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