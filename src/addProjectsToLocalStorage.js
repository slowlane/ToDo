import projectTracker from "./projectTracker";

export function addProjectsToLocalStorage(){
    const projectArray = projectTracker.get();
    const projectObjectHolder = [];
    
    for(let project of projectArray){
        const projTitle = project.getTitle();
        const projDueDate = project.getCompletionDate();
        const projToDoList = project.get();
        const projectObject = {
            title: projTitle,
            dueDate: projDueDate,
            toDoList: projToDoList
        }
        projectObjectHolder.push(projectObject);
    }
    localStorage.setItem('projects', JSON.stringify(projectObjectHolder));
}