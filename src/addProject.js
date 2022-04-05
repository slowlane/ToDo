import Project from './project';

const addProject = function (content) {
    //Create project and add it to the UL to the left of the page
    const closeIcon = document.createElement('div');
    const projectUl = content.querySelector('ul');
    const input = content.querySelector('input');
    const projectName = input.value;
    console.log(projectName);

    const newLi = document.createElement('li');
    newLi.classList.add('project-li');
    newLi.innerHTML = input.value;
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