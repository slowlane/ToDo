import "./style.css";
import addProject from "./addProject";
import projectPage from "./projectPage";
import projectClick from "./projectClickFunctionality";
import { removeProject } from "./removeProject";
import { addProjectsToLocalStorage } from "./addProjectsToLocalStorage";
import projectTracker from "./projectTracker";
import { getProjectsFromLocalStorage } from "./getProjectsFromLocalStorage";


const runProgram = (function(){
    if(localStorage.getItem('projects') != null){
        getProjectsFromLocalStorage();
    }
    
    //cache DOM
    const content = document.querySelector('.left-side-div');
    const button = content.querySelector('#add-project-button');
    
    //add eventlistener
    button.addEventListener('click', retrieveAndPushProject);

    function retrieveAndPushProject(){
        const newProjectAndClose = addProject(content);
 
        const newProject = newProjectAndClose.project;
        const newCloseIcon = newProjectAndClose.closeIcon;
        
        //add eventlisteners
        newCloseIcon.addEventListener('click', (e) => {
            removeProject(e);
        });
        projectClick(newProject);

        //add to tracker and create project page
        projectTracker.push(newProject);
        addProjectsToLocalStorage();
        projectPage(newProject);
    }
})();


