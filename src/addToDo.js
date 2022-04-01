import ToDo from "./todo";
import constructAddToDoForm from "./constructAddToDoForm";
function addToDo(task, project){
    addTask();

    function addTask(){
        project.addTask(task);
        console.log(project.get());
    }
}

export default addToDo;