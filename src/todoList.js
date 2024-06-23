import { todo } from "./todo";

export class list {
    constructor() {
        this.todoList = [];
    }

    addNote(note) {
        // ensure argument passed in is a todo object
        if (note instanceof todo === false)
            return;
        this.todoList.push(note);
    }

    removeNote(todo) {
        // ensure argument passed in is a todo object
        if (note instanceof todo === false)
            return;
        this.todoList.forEach((val, index) => {
            if (val.title === todo) {
                this.todoList.splice(index, 1);
            }
        });
    }
}