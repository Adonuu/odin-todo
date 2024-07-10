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
        return this.todoList();
    }

    addToDo(todo) {
        this.todoList.push(todo);
    }
}
