// import { formatDistanceToNow } from "date-fns";

function constructProjectPage(project){
    const content = document.getElementById('todo-container');
    
    createProjectHeader();
    addTimePicker();
    addButtons();

    
    
    
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
    
    function addComponent(component){
        content.appendChild(component);
    }

};

export default constructProjectPage;