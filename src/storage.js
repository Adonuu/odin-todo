import { project } from "./project";
import { todo } from "./todo";

export function readStorage() {
    // grab projects form local storage if it is there
    let projects = JSON.parse(localStorage.getItem('obsinotionProjectStorage'));
    // if there is nothing in the local storage make an empty array
    if (projects === null) {
        projects = [];
    }
    // loop through and set each projects prototype to a project type
    projects.forEach((val) => {
        val.__proto__ = new project();
        val.getTodoList().forEach((note) => {
            note.__proto__ = new todo();
        });
    });

    return projects;
}

export function saveStorage(projects) {
    localStorage.setItem('obsinotionProjectStorage', JSON.stringify(projects));
}