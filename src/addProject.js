import Project from './project';

const addProject = function (content) {
    const projectUl = content.querySelector('ul');
    const input = content.querySelector('input');
    const projectName = input.value;

    const newLi = document.createElement('li');
    newLi.classList.add('project-li');
    newLi.innerHTML = projectName;

    projectUl.appendChild(newLi);

    const project = new Project(projectName);

    input.value = '';

    // projectTracker.set(project);
    
    return project;
};



export default addProject;