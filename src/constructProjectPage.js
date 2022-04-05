import { formatDistanceToNow, parseISO } from "date-fns";
import { addProjectsToLocalStorage } from "./addProjectsToLocalStorage";
import constructAddToDoForm from "./constructAddToDoForm";
import { removeToDo } from "./removeToDo";

function constructProjectPage(project){
    
    //cache DOM
    const content = document.getElementById('todo-container');

    //Instantiate project page contents
    createProjectHeader();
    addTimePicker();
    renderToDoItems();
    addButtons();
    displayCountDown();

    //cache new DOM-elements after instantiation
    const buttons = content.querySelectorAll('.todo-button');
    const todoAddButton = buttons[0];
    const timeInput = content.querySelector('input');

    //add eventlisteners
    todoAddButton.addEventListener('click', () => {
        constructAddToDoForm(project);
    }
    );

    timeInput.addEventListener('input', addCountDown);    
    
    //Construction functions
    //Create Task item if present
    function renderToDoItems(){
        const todoItemList = project.get();
        if(todoItemList.length > 0){
            for(let todo of todoItemList){
                createToDoItems(todo);
            }
        }
    }

    function createToDoItems(todo){
        const todoDiv = document.createElement('div');
        const todoBaseDiv = document.createElement('div');
        const todoTitlePara = document.createElement('p');
        const todoDueDatePara = document.createElement('p');
        const closeIcon = document.createElement('div');
        
        

        todoTitlePara.innerHTML = todo.getTitle();
        // todoTitlePara.innerHTML = todo.title;
        todoDueDatePara.innerHTML = todo.getDate();
        closeIcon.innerHTML = '+';

        todoBaseDiv.id = 'no-delete';
        closeIcon.classList.add('close');
        closeIcon.id = 'task-close';

        todoBaseDiv.appendChild(todoTitlePara);
        todoBaseDiv.appendChild(todoDueDatePara);
        todoDiv.appendChild(closeIcon);
        todoDiv.appendChild(todoBaseDiv);
        todoDiv.classList.add('todo-div');

        todoDiv.addEventListener('click', (e) => {
            renderOpenedTask(e, todo);
        });
        closeIcon.addEventListener('click', (e) => {
            removeToDo(e, project);
        });

        addComponent(todoDiv);

    }

    function createProjectHeader(){
        const projectDiv = document.createElement('div');
        projectDiv.id = 'project-title-div';
        
        const projectHeader = document.createElement('h1');
        projectHeader.id = 'project-header';
        projectHeader.innerHTML = project.getTitle();

        projectDiv.appendChild(projectHeader);

        addComponent(projectDiv);
    }


    function addTimePicker(){
        const chooseTimeDiv = document.createElement('div');
        
        const chooseTimeLabel = document.createElement('label');
        chooseTimeLabel.innerHTML = "Pick a date for your project?";
    
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
    
        addAndRemoveDiv.id = 'todo-button-container';
        addButton.classList.add('todo-button');

        addAndRemoveDiv.appendChild(addButton);

        addComponent(addAndRemoveDiv);
    }

    function addCountDown(){
        const projectDueDate = content.querySelector('input');
        project.setCompletionDate(projectDueDate.value);
        addProjectsToLocalStorage();

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

    function renderOpenedTask(e, todo){
        const element = e.target;
        if(element.nodeName === 'DIV' && element.classList.contains('todo-div')){
            element.classList.toggle('open-todo');

            const todoExtensionDiv = document.createElement('div');

            if(element.classList.contains('open-todo')){
                
                todoExtensionDiv.id = 'extended-div';

                const todoTextArea = document.createElement('textarea');
                todoTextArea.innerHTML = todo.getDesc();
                todoTextArea.id = 'todo-textarea';

                todoExtensionDiv.appendChild(todoTextArea);
             
                element.appendChild(todoExtensionDiv);
            }
            else{
                for(let elem of element.childNodes){
                    if(elem.id === 'extended-div'){
                        //Set textareas current value as new task description, save it to localstorage
                        todo.setDesc(document.getElementById("todo-textarea").value);
                        addProjectsToLocalStorage();
                    }
                        //Close the opened task
                    if(elem.nodeName === 'DIV' && elem.id != 'no-delete'
                    && elem.id != 'task-close'){
                        elem.remove();
                    }
                }
            }
        }
    }
    

};

export default constructProjectPage;