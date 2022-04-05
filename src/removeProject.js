import { addProjectsToLocalStorage } from "./addProjectsToLocalStorage";
import deleteProjectPage from "./deleteProjectPage";
import projectTracker from "./projectTracker";
import { defaultProjectPage } from "./defaultProjectPage";

export const removeProject = (function(e){
    const allContent = document.querySelector('.content');
    const content = allContent.querySelector('.left-side-div');
    const projectArray = projectTracker.get();
    e.stopPropagation();

    const closeIconText = e.target.innerText;
    const projectName = e.target.parentElement.innerText;
    let finalProjectTitle = projectName.replace(closeIconText, '');
    finalProjectTitle = finalProjectTitle.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");


    for(let i = 0; i < projectArray.length; i++){
        if(projectArray[i].getTitle() === finalProjectTitle){
            console.log('up');
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

});