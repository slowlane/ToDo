import constructProjectPage from "./constructProjectPage";
import deleteProjectPage from "./deleteProjectPage";

export function removeToDo(event, project){
    const toDoList = project.get();
    const HTMLitem = event.target;
    const todoInnerText = HTMLitem.parentElement.childNodes[1].childNodes[0].innerHTML;

    for(let i = 0; i < toDoList.length; i++){
        if(toDoList[i].getTitle() === todoInnerText){
            console.log(project.get());
            toDoList.splice(i, 1);
            console.log(project.get());
        }
    }
    deleteProjectPage();
    constructProjectPage(project);
}
