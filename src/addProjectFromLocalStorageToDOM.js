import projectClick from "./projectClickFunctionality";
import { removeProject } from "./removeProject";

export function addProjectFromLocalStorageToDOM(project){
    const content = document.querySelector('.left-side-div');
    const closeIcon = document.createElement('div');
    const projectUl = content.querySelector('ul');
    // const input = content.querySelector('input');
    // const projectName = input.value;
    // console.log(projectName);

    const newLi = document.createElement('li');
    newLi.classList.add('project-li');
    newLi.innerHTML = project.getTitle();
    newLi.appendChild(closeIcon);

    projectUl.appendChild(newLi);

    // input.value = '';

    closeIcon.classList.add('close');
    closeIcon.innerHTML = '+';
    closeIcon.id = 'project-close';
    closeIcon.addEventListener('click', (e) => {
        removeProject(e);
    });
    projectClick(project);

}





// function retrieveAndPushProject(){
//     const newProjectAndClose = addProject(content);

//     const newProject = newProjectAndClose.project;
//     const newCloseIcon = newProjectAndClose.closeIcon;
    
//     //add eventlisteners
    // newCloseIcon.addEventListener('click', (e) => {
    //     removeProject(e);
    // });
//     projectClick(newProject);

//     //add to tracker and create project page
//     projectTracker.push(newProject);
//     addProjectsToLocalStorage();
//     projectPage(newProject);
// }