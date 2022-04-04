import Project from './project';
import removeProject from './removeProject';

const addProject = function (content) {
    const closeIcon = document.createElement('div');
    const projectUl = content.querySelector('ul');
    const input = content.querySelector('input');
    const projectName = input.value;

    const newLi = document.createElement('li');
    newLi.classList.add('project-li');
    newLi.innerHTML = projectName;
    newLi.appendChild(closeIcon);

    projectUl.appendChild(newLi);

    const project = new Project(projectName);

    input.value = '';

    closeIcon.classList.add('close');
    closeIcon.innerHTML = '+';
    closeIcon.id = 'project-close';

    
    return { project, closeIcon };
};



export default addProject;