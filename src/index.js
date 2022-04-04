import "./style.css";
import addProject from "./addProject";
import ProjectTracker from "./projectTracker";
import projectPage from "./projectPage";
import projectClick from "./projectClickFunctionality";
import { stringifyRequest } from "css-loader/dist/utils";
// import Project from "./project";

const runProgram = (function(){
    const projectTracker = new ProjectTracker();
    
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
            deleteProjectFromTracker(e);
        });
        projectClick(newProject);

        //add to tracker and create project page
        projectTracker.push(newProject);
        projectPage(newProject);
    }
    
    function deleteProjectFromTracker(e){
        const closeIconText = e.target.innerText;
        const projectName = e.target.parentElement.innerText;
        const finalProjectTitle = projectName.replace(closeIconText, '');
        console.log(finalProjectTitle);
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


