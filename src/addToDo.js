import ToDo from "./todo";
import constructAddToDoForm from "./constructAddToDoForm";
function addToDo(task, project){
    project.addTask(task);
}

export default addToDo;