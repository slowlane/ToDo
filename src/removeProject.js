import { addProjectsToLocalStorage } from "./addProjectsToLocalStorage";
import deleteProjectPage from "./deleteProjectPage";
import projectTracker from "./projectTracker";

export const removeProject = (function(e){
    const allContent = document.querySelector('.content');
    const content = allContent.querySelector('.left-side-div');
    const projectArray = projectTracker.get();

    const closeIconText = e.target.innerText;
    const projectName = e.target.parentElement.innerText;
    let finalProjectTitle = projectName.replace(closeIconText, '');
    finalProjectTitle = finalProjectTitle.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
    // const projectArray = projectTracker.get();
    
    console.log(finalProjectTitle + '' + projectArray[0].getTitle());

    for(let i = 0; i < projectArray.length; i++){
        if(projectArray[i].getTitle() === finalProjectTitle){
            deleteProjectPage();
            projectArray.splice(i, 1);
            deleteProjectFromList(finalProjectTitle);
            addProjectsToLocalStorage(projectTracker);
            defaultProjectPage();
        }
    }



    function deleteProjectFromList(projectName){
        const listItems = content.getElementsByClassName('project-li');
        for(let listItem of listItems){
            let liText = listItem.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
            liText = liText.replace('+', '');
            if(projectName === liText){
                listItem.remove();
            }

        }
    }

    
    function defaultProjectPage(){
        const todoDiv = allContent.querySelector('#todo-container');
        const newH1 = document.createElement('h1');
        newH1.innerHTML = 'Your project will display here!';
        newH1.id = 'default-header';
        
        todoDiv.appendChild(newH1);


    }
    // <h1 id="default-header">Your project will display here!</h1>
});