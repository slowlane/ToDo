import projectPage from "./projectPage";
function projectClick(project) {
    const content = document.querySelector('.left-side-div');
    const projectList = content.querySelector('ul');
    
    for(let li of projectList.childNodes){
        if(li.innerText === project.getTitle()){
            li.addEventListener('click', bringUpProjectContents);
        }
    }
    
    function bringUpProjectContents(e){
        projectPage(project);
    }

}



export default projectClick;