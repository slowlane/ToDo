// import { , format } from 'date-fns';
// import { formatDistanceToNow, parseISO } from "date-fns";
import constructProjectPage from "./constructProjectPage";
import deleteProjectPage from "./deleteProjectPage";

const projectPage = function(project){ 
    
    //cache dom
    const content = document.getElementById('todo-container');
    
    deleteProjectPage();
    constructProjectPage(project);
}

export default projectPage;