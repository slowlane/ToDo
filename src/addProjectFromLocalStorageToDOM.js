import projectClick from "./projectClickFunctionality";
import { removeProject } from "./removeProject";

export function addProjectFromLocalStorageToDOM(project){
    const content = document.querySelector('.left-side-div');
    const closeIcon = document.createElement('div');
    const projectUl = content.querySelector('ul');

    const newLi = document.createElement('li');
    newLi.classList.add('project-li');
    newLi.innerHTML = project.getTitle();
    newLi.appendChild(closeIcon);

    projectUl.appendChild(newLi);

    closeIcon.classList.add('close');
    closeIcon.innerHTML = '+';
    closeIcon.id = 'project-close';
    closeIcon.addEventListener('click', (e) => {
        removeProject(e);
    });
    projectClick(project);
};
