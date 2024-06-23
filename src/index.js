import { project } from "./project";
import { list } from "./todoList";
import { todo } from "./todo";

let testProject = new project('test');
let testNote = new todo('Test Note', 'This is a test note', '5/9/24', 1);

testProject.addGroup('Test');
testProject.getGroupList('Test').addNote(testNote);

console.log(testProject.getGroupList('Test'));