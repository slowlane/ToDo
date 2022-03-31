// import { , format } from 'date-fns';
// import { formatDistanceToNow, parseISO } from "date-fns";
import constructProjectPage from "./constructProjectPage";
import deleteProjectPage from "./deleteProjectPage";

const projectPage = function(project){ 
    
    //cache dom
    const content = document.getElementById('todo-container');
    
    deleteProjectPage();
    constructProjectPage(project);
    // displayCountDown();

    // const timeInput = content.querySelector('input');
    //add eventlistener
    // timeInput.addEventListener('input', addCountDown);


    // function addCountDown(){
    //     const projectDueDate = content.querySelector('input');
    //     project.setCompletionDate(projectDueDate.value);

    //     displayCountDown();
    // }

    // function displayCountDown(){
    //     if(project.getCompletionDate() != 0){
    //         const headerDiv = content.querySelector('#project-title-div');
    //         const headerCountDown = headerDiv.querySelector('h2');

    //         if(headerCountDown != null){
    //             headerCountDown.remove();
    //         }

    //         const countDown = formatDistanceToNow(parseISO(project.getCompletionDate()));
    //         const countDownHeader = document.createElement('h2');
    //         countDownHeader.innerHTML = countDown + ' left';

    //         headerDiv.appendChild(countDownHeader);
    //     }


    // }

    

}

export default projectPage;