import { list } from "./todoList";

export class project {
    constructor(title) {
        this.title = title;
        this.groups = [{title: 'default', list: new list()}];
    }

    addGroup(title) {
        this.groups.push({title: title, list: new list()});
    }

    removeGroup(title) {
        this.groups.forEach((val, index) => {
            if(val.title === title)
                this.groups.splice(index, 1);
        });
    }

    getGroupList(groupTitle) {
        let returnValue;
        this.groups.forEach((val, index) => {
            if (val.title === groupTitle){
                returnValue = val.list;
            } 
        });
        return returnValue;
    }

    moveNoteFromGroup(note, newGroupTitle, oldGroupTitle) {
        // remove note from old group
        this.getGroupList(oldGroupTitle).todoList.forEach((val, index) => {
            if (val.title === note.title)
                this.todoList.splice(index, 1);
        });
        // add note to new group
        this.getGroupList(newGroupTitle).todoList.push(note);
    }

    addNoteToGroup(note, groupTitle) {
        this.getGroupList(groupTitle).todoList.addNote(note);
    }
}
