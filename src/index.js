import "./style.css";
import addProject from "./addProject";
import ProjectTracker from "./projectTracker";
import projectPage from "./projectPage";
// import Project from "./project";

const runProgram = (function(){
    const projectTracker = new ProjectTracker();
    
    //cache DOM
    const content = document.querySelector('.left-side-div');
    const button = content.querySelector('#add-button');
    
    //add eventlistener
    button.addEventListener('click', retrieveAndPushProject);

    function retrieveAndPushProject(){
        const newProject = addProject(content);
        projectTracker.set(newProject);
        projectPage(newProject);
    }

})();

