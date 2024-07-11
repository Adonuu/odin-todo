export class project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTodoList() {
        return this.todoList;
    }

    addToDo(todo) {
        this.todoList.push(todo);
    }

    removeToDo(todo) {
        this.todoList.forEach((val, i) => {
            if (val.getTitle() === todo.getTitle()) {
                this.todoList.splice(i, 1);
            }
        });
    }
}
