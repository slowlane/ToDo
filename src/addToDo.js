import ToDo from "./todo";
import constructAddToDoForm from "./constructAddToDoForm";
import { addProjectsToLocalStorage } from "./addProjectsToLocalStorage";
function addToDo(task, project){
    project.addTask(task);
    addProjectsToLocalStorage();
}

export default addToDo;