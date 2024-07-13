import { todo } from "./todo";
import { getProject } from ".";

const projectDisplay = document.querySelector('#projectTodos');
const projectListDisplay = document.querySelector('#projectList');

export function renderProject(project) {
    project.getTodoList().forEach((val) => {
        projectDisplay.appendChild(renderToDo(val, project));;
    });
}

function renderToDo(todo, project) {
    let baseDiv = document.createElement('div');
    baseDiv.classList.add('todo');
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('todoTitle');
    titleDiv.innerHTML = todo.getTitle();
    baseDiv.appendChild(titleDiv);
    let details = createToDoDetails(todo, project);
    baseDiv.appendChild(details);
    baseDiv = displayToDoDetails(baseDiv, details);
    return baseDiv;
}

function createToDoDetails(todo, project) {
    let detailDiv = document.createElement('div');
    detailDiv.style.display = 'none';
    detailDiv.classList.add('todoDetail');
    if (todo.getComplete()) {
        detailDiv.classList.add('complete');
    }
    let priorityDiv = createToDoPropertyDisplay('Priority', todo.getPriority(), todo.getTitle().replace(/\s/g, ''));
    detailDiv.appendChild(priorityDiv);
    let dateDiv = createToDoPropertyDisplay('Due Date', todo.getDueDate(), todo.getTitle().replace(/\s/g, ''));
    detailDiv.appendChild(dateDiv);
    let descriptionDiv = createToDoPropertyDisplay('Description', todo.getDescription(), todo.getTitle().replace(/\s/g, ''));
    detailDiv.appendChild(descriptionDiv);
    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', (event) => editButtonOnClick(event.target, project));
    detailDiv.appendChild(editButton);
    return detailDiv;
}

function displayToDoDetails(todoDiv, detailDiv) {
    todoDiv.firstChild.addEventListener('click', () => {
        if (detailDiv.style.display === 'none') {
            detailDiv.style.display = 'block';
        } else {
            detailDiv.style.display = 'none';
        }
    });
    return todoDiv;
}

function createToDoPropertyDisplay(property, value, name) {
    let baseDiv = document.createElement('div');
    baseDiv.id = name + property.replace(/\s/g, '');
    baseDiv.classList.add('propertyDisplay');
    let descriptionDiv = document.createElement('div');
    descriptionDiv.innerHTML = property + ':';
    let valueDiv = document.createElement('input');
    valueDiv.value = value;
    valueDiv.disabled = true;
    baseDiv.appendChild(descriptionDiv);
    baseDiv.appendChild(valueDiv);
    return baseDiv;

}

function editButtonOnClick(event, project) {
    if (event.innerHTML === 'Edit') {
        event.innerHTML = 'Save';
        let children = event.parentElement.children;
        // skip over last child since it is a button
        for (let i = 0; i < children.length - 1; i++ ) {
            let child = children[i];
            child.lastChild.disabled = false;
        }
    } else {
        event.innerHTML = 'Edit';
        // grab current info from input boxes
        // get to do name for help identifying input boxes
        let todoName = event.parentElement.parentElement.firstChild.innerHTML;
        let todoNameNoSpaces = event.parentElement.parentElement.firstChild.innerHTML.replace(/\s/g, '');
        let priority = document.querySelector('#' + todoNameNoSpaces + 'Priority');
        let dueDate = document.querySelector('#' + todoNameNoSpaces + 'DueDate');
        let description = document.querySelector('#' + todoNameNoSpaces + 'Description');
        // grab todo note
        let todo = project.getToDo(todoName);
        // modify todo with new values
        todo.setPriority(priority.lastChild.value);
        todo.setDueDate(dueDate.lastChild.value);
        todo.setDescription(description.lastChild.value);
        // save to todo
        project.saveToDo(todo);
    }
    
}

export function renderProjectList(projects) {
    projects.forEach((val) => {
        let div = document.createElement('div');
        div.innerHTML = val.getTitle();
        div.classList.add('projectListItem');
        projectListDisplay.appendChild(div);
        div.addEventListener('click', (event) => {
            projectDisplay.innerHTML = '';
            renderProject(getProject(event.target.innerHTML));
        });
    })
}

