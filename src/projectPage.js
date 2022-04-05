import constructProjectPage from "./constructProjectPage";
import deleteProjectPage from "./deleteProjectPage";

const projectPage = function(project){ 
    
    deleteProjectPage();
    constructProjectPage(project);
}

export default projectPage;