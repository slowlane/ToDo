import "./style.css";
import addProject from "./addProject";
import ProjectTracker from "./projectTracker";
import projectPage from "./projectPage";
import projectClick from "./projectClickFunctionality";
import deleteProjectPage from "./deleteProjectPage";
import { removeProject } from "./removeProject";
import { addProjectsToLocalStorage } from "./addProjectsToLocalStorage";
import projectTracker from "./projectTracker";
import { getProjectsFromLocalStorage } from "./getProjectsFromLocalStorage";

// import Project from "./project";

const runProgram = (function(){
    // const projectTracker = new ProjectTracker();
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
    

    
    // function getProjects(){
    //     return projectTracker;
    // }

    // return {
    //     getProjects
    // }

    // function projectTabFunctionality(){
        
    // }

})();


