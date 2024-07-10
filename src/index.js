import { project } from "./project";
import { todo } from "./todo";

let testProject = new project('test');
let testNote = new todo('Test Note', 'This is a test note', '5/9/24', 1);

testProject.addToDo(testNote);