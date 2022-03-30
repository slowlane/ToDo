// import { , format } from 'date-fns';
import { formatDistanceToNow, parseISO } from "date-fns";
import constructProjectPage from "./constructProjectPage";

const projectPage = function(project){ 
    
    constructProjectPage(project);
    //cache dom
    const content = document.getElementById('todo-container');
    const checker = content.querySelector('input');
    
    //add eventlistener
    checker.addEventListener('input', addCountDown)
    
    function addCountDown(){
        const projectDueDate = content.querySelector('input');

        project.setCompletionDate(projectDueDate.value);

        const countDown = formatDistanceToNow(parseISO(projectDueDate.value));
        const countDownHeader = document.createElement('h2');
        countDownHeader.innerHTML = countDown;
        
        const headerDiv = content.querySelector('#project-title-div');
        headerDiv.appendChild(countDownHeader);


    }

    

}

export default projectPage;