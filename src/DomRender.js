const projectDisplay = document.querySelector('#projectTodos');

export function renderProject(project) {
    console.log(project.getTodoList());
    project.getTodoList().forEach((val) => {
        projectDisplay.appendChild(renderToDo(val));;
    });
}

function renderToDo(todo) {
    let baseDiv = document.createElement('div');
    baseDiv.classList.add('todo');
    let titleDiv = document.createElement('div');
    titleDiv.classList.add('todoTitle');
    titleDiv.innerHTML = todo.getTitle();
    baseDiv.appendChild(titleDiv);
    let details = createToDoDetails(todo);
    baseDiv.appendChild(details);
    return baseDiv;
}

function createToDoDetails(todo) {
    let detailDiv = document.createElement('div');
    detailDiv.style.display = 'none';
    detailDiv.classList.add('todoDetail');
    if (todo.getComplete()) {
        detailDiv.classList.add('complete');
    }
    let priorityDiv = document.createElement('div');
    priorityDiv.innerHTML = 'Priority: ' + todo.getPriority();
    detailDiv.appendChild(priorityDiv);
    let dateDiv = document.createElement('div');
    dateDiv.innerHTML = 'Due Date: ' + todo.getDueDate();
    detailDiv.appendChild(dateDiv);
    let descriptionDiv = document.createElement('div');
    descriptionDiv.innerHTML = 'Description: ' + todo.getDescription();
    detailDiv.appendChild(descriptionDiv);
    return detailDiv;
}

