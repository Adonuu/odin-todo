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
}
