// import { formatDistanceToNow } from "date-fns";
import { formatDistanceToNow, parseISO } from "date-fns";
import constructAddToDoForm from "./constructAddToDoForm";
import addToDo from "./addToDo";
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
    const todoRemoveButton = buttons[1];
    const timeInput = content.querySelector('input');

    //add eventlisteners
    todoAddButton.addEventListener('click', () => {
        constructAddToDoForm(project);

    }
    );
    todoRemoveButton.addEventListener('click', (e) => {
        removeToDo(e, project);
    })
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

        todoTitlePara.innerHTML = todo.getTitle();
        todoDueDatePara.innerHTML = todo.getDate();

        todoBaseDiv.id = 'no-delete';

        todoBaseDiv.appendChild(todoTitlePara);
        todoBaseDiv.appendChild(todoDueDatePara);
        todoDiv.appendChild(todoBaseDiv);
        todoDiv.classList.add('todo-div');

        todoDiv.addEventListener('click', (e) => {
            const element = e.target;
            if(element.nodeName === 'DIV' && element.classList.contains('todo-div')){
                element.classList.toggle('open-todo');

                const todoExtensionDiv = document.createElement('div');
    
                if(element.classList.contains('open-todo')){
                    
                    // todoExtensionDiv.classList.add('todo-extended-div');
                    todoExtensionDiv.id = 'extended-div';
    
                    const todoDescPara = document.createElement('p');
                    const todoPrio = document.createElement('p');
    
                    todoDescPara.innerHTML = todo.getDesc();
                    todoPrio.innerHTML = todo.getPrio();
    
                    todoExtensionDiv.appendChild(todoDescPara);
                    todoExtensionDiv.appendChild(todoPrio);
                    element.appendChild(todoExtensionDiv);
    
                    todoExtensionDiv.addEventListener('click', () => {
    
                    });
                }
                else{
                    for(let elem of element.childNodes){
                        if(elem.nodeName === 'DIV' && elem.id != 'no-delete'){
                            elem.remove();
                        }
                    }
                }
            }
            

            
            

        })

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
        const todoRemoveButton = document.createElement('button');
        todoRemoveButton.innerHTML = 'Remove task';
    
        addAndRemoveDiv.id = 'todo-button-container';
        addButton.classList.add('todo-button');
        todoRemoveButton.classList.add('todo-button');

        


        addAndRemoveDiv.appendChild(addButton);
        addAndRemoveDiv.appendChild(todoRemoveButton);

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