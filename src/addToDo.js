import ToDo from "./todo";
import constructAddToDoForm from "./constructAddToDoForm";
function addToDo(){
    const content = document.getElementById('todo-container');
    const buttons = content.querySelectorAll('.todo-button');

    const addButton = buttons[0];
    const removeButton = buttons[1];

    addButton.addEventListener('click', addTask);
    // removeButton.addEventListener('click', removeTask);

    function addTask(){
        constructAddToDoForm(content);
    }
}

export default addToDo;