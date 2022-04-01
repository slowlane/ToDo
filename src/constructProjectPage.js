// import { formatDistanceToNow } from "date-fns";
import { formatDistanceToNow, parseISO } from "date-fns";
import constructAddToDoForm from "./constructAddToDoForm";
import addToDo from "./addToDo";

function constructProjectPage(project){
    
    //cache DOM
    const content = document.getElementById('todo-container');

    //Instantiate project page contents
    createProjectHeader();
    addTimePicker();
    addButtons();
    displayCountDown();

    //cache new DOM-elements after instantiation
    const buttons = content.querySelectorAll('.todo-button');
    const todoAddButton = buttons[0];
    // const removeButton = buttons[1];
    const timeInput = content.querySelector('input');

    //add eventlisteners
    todoAddButton.addEventListener('click', () => {
        constructAddToDoForm(project)}
    );
    timeInput.addEventListener('input', addCountDown);    
    
    //Construction functions
    function createProjectHeader(){
        const projectDiv = document.createElement('div');
        projectDiv.id = 'project-title-div';
        
        const projectHeader = document.createElement('h1');
        projectHeader.id = 'project-header';
        projectHeader.innerHTML = project.getTitle();

        projectDiv.appendChild(projectHeader);

        addComponent(projectDiv);
        // console.log(project.getTitle());
    }


    function addTimePicker(){
        const chooseTimeDiv = document.createElement('div');
        
        const chooseTimeLabel = document.createElement('label');
        chooseTimeLabel.innerHTML = "Pick a time for your project?";
    
        const chooseTime = document.createElement('input');
        chooseTime.type = 'date';

        chooseTimeDiv.id = 'choose-time-div';

        chooseTimeDiv.appendChild(chooseTimeLabel);
        chooseTimeDiv.appendChild(chooseTime);

        addComponent(chooseTimeDiv);
    }

    function addButtons(){
        const addAndRemoveDiv = document.createElement('div');
    
        const addButton = document.createElement('button');
        addButton.innerHTML = 'Add task';
        const removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove task';
    
        addAndRemoveDiv.id = 'todo-button-container';
        addButton.classList.add('todo-button');
        removeButton.classList.add('todo-button');

        


        addAndRemoveDiv.appendChild(addButton);
        addAndRemoveDiv.appendChild(removeButton);

        addComponent(addAndRemoveDiv);
    }

    function addCountDown(){
        const projectDueDate = content.querySelector('input');
        project.setCompletionDate(projectDueDate.value);

        displayCountDown();
    }

    function displayCountDown(){
        if(project.getCompletionDate() != 0){
            const headerDiv = content.querySelector('#project-title-div');
            const headerCountDown = headerDiv.querySelector('h2');

            if(headerCountDown != null){
                headerCountDown.remove();
            }

            const countDown = formatDistanceToNow(parseISO(project.getCompletionDate()));
            const countDownHeader = document.createElement('h2');
            countDownHeader.innerHTML = countDown + ' left';

            headerDiv.appendChild(countDownHeader);
        }


    }

    
    function addComponent(component){
        content.appendChild(component);
    }

};

export default constructProjectPage;