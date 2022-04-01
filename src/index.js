import "./style.css";
import addProject from "./addProject";
import ProjectTracker from "./projectTracker";
import projectPage from "./projectPage";
import projectClick from "./projectClickFunctionality";
// import Project from "./project";

const runProgram = (function(){
    console.log('farg');
    const projectTracker = new ProjectTracker();
    
    //cache DOM
    const content = document.querySelector('.left-side-div');
    const button = content.querySelector('#add-project-button');
    
    //add eventlistener
    button.addEventListener('click', retrieveAndPushProject);

    function retrieveAndPushProject(){
        
        const newProject = addProject(content);  
        projectClick(newProject);
        
        projectTracker.push(newProject);
        projectPage(newProject);
    }

    function getProjects(){
        return projectTracker;
    }

    return {
        getProjects
    }

    // function projectTabFunctionality(){
        
    // }

})();



// export default projectsModule;

