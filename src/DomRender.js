import { todo } from "./todo";
import { getProject } from ".";
import { project } from "./project";
import eventEmmiter from "./eventEmitter.js";

const projectDisplay = document.querySelector('#projectTodos');
const projectListDisplay = document.querySelector('#projectList');

export function renderProject(project) {
    projectDisplay.innerHTML= '';
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
    if (todo.getComplete() === true) {
        baseDiv.classList.add('complete');
    }
    return baseDiv;
}

function createToDoDetails(todo, project) {
    let detailDiv = document.createElement('div');
    detailDiv.style.display = 'none';
    detailDiv.classList.add('todoDetail');
    let priorityDiv = createToDoPropertyDisplay('Priority', todo.getPriority(), todo.getTitle().replace(/\s/g, ''));
    detailDiv.appendChild(priorityDiv);
    let dateDiv = createToDoPropertyDisplay('Due Date', todo.getDueDate(), todo.getTitle().replace(/\s/g, ''), "date");
    detailDiv.appendChild(dateDiv);
    let descriptionDiv = createToDoPropertyDisplay('Description', todo.getDescription(), todo.getTitle().replace(/\s/g, ''));
    detailDiv.appendChild(descriptionDiv);
    let completeDiv = createToDoPropertyDisplay('Complete', todo.getComplete(), todo.getTitle().replace(/\s/g, ''), "checkbox");
    detailDiv.appendChild(completeDiv);
    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', (event) => editButtonOnClick(event.target, project));
    detailDiv.appendChild(editButton);
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', (event) => deleteButtonOnClick(event.target, project));
    detailDiv.appendChild(deleteButton);
    return detailDiv;
}

function displayToDoDetails(todoDiv, detailDiv) {
    todoDiv.firstChild.addEventListener('click', () => {
        if (detailDiv.style.display === 'none') {
            detailDiv.style.display = 'flex';
        } else {
            detailDiv.style.display = 'none';
        }
    });
    return todoDiv;
}

function createToDoPropertyDisplay(property, value, name, inputType) {
    let baseDiv = document.createElement('div');
    baseDiv.id = name + property.replace(/\s/g, '');
    baseDiv.classList.add('propertyDisplay');
    let descriptionDiv = document.createElement('div');
    descriptionDiv.innerHTML = property + ':';
    let valueDiv = document.createElement('input');
    if (inputType === "checkbox")
    {
        valueDiv.type = "checkbox";
        valueDiv.checked = value;
    }
    else if (inputType === "date") {
        valueDiv.type = "date";
        valueDiv.value = value;
    } else {
        valueDiv.value = value;
    }
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
        let complete = document.querySelector('#' + todoNameNoSpaces + 'Complete');
        // grab todo note
        let todo = project.getToDo(todoName);
        // modify todo with new values
        todo.setPriority(priority.lastChild.value);
        todo.setDueDate(dueDate.lastChild.value);
        todo.setDescription(description.lastChild.value);
        todo.setComplete(complete.lastChild.checked);
        if (todo.getComplete() === true) {
            event.parentElement.parentElement.parentElement.firstChild.classList.add('complete');
        } else {
            event.parentElement.parentElement.parentElement.firstChild.classList.remove('complete');
        }
        // disable the inputs
        let children = event.parentElement.children;
        for (let i = 0; i < children.length - 1; i++ ) {
            let child = children[i];
            child.lastChild.disabled = true;
        }
        // save to todo
        project.saveToDo(todo);

        // send event to index.js to save projects
        const saveEvent = new CustomEvent('saveProject', project);
        eventEmmiter.dispatchEvent(saveEvent);
    }
}

function deleteButtonOnClick(event, project) {
    let todoName = event.parentElement.parentElement.firstChild.innerHTML;
    let todo = project.getToDo(todoName);
    project.removeToDo(todo);
    renderProject(project);
    // send event to index.js to save projects
    const saveEvent = new CustomEvent('saveProject', project);
    eventEmmiter.dispatchEvent(saveEvent);
}

export function renderProjectList(projects) {
    projectListDisplay.innerHTML = '';
    projects.forEach((val) => {
        let div = document.createElement('div');
        div.innerHTML = val.getTitle();
        div.classList.add('projectListItem');
        projectListDisplay.appendChild(div);
        div.addEventListener('click', (event) => {
            projectDisplay.innerHTML = '';
            document.querySelector('#projectSection').setAttribute('currentProject', getProject(event.target.innerHTML).getTitle());
            renderProject(getProject(event.target.innerHTML));
        });
    })
}

