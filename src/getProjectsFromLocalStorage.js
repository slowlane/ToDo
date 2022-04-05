import { addProjectFromLocalStorageToDOM } from "./addProjectFromLocalStorageToDOM";
import Project from "./project";
import projectTracker from "./projectTracker";
import ToDo from "./todo";

export function getProjectsFromLocalStorage(){
    if (storageAvailable('localStorage')) {
        const projectObjectList = JSON.parse(localStorage.getItem('projects'));
        for(let project of projectObjectList){
            const newProject = new Project(project.title);
            if(project.dueDate != undefined){
                newProject.setCompletionDate(project.dueDate);
            }
            if(project.toDoList != undefined){
                for(let task of project.toDoList){
                    newProject.addTask(makeTask(task));
                    // console.log(newProject.get());
                }
            }
            projectTracker.push(newProject);
            addProjectFromLocalStorageToDOM(newProject);
        }
      }
      else {
        // Too bad, no localStorage for us
      }
}
function makeTask(object){
    const newTask = new ToDo(object.title, object.description, object.dueDate);
    return newTask;

}


function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}