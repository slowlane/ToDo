import projectPage from "./projectPage";
function projectClick(project) {
    const content = document.querySelector('.left-side-div');
    const projectList = content.querySelector('ul');
    console.log('yo');
    
    for(let li of projectList.childNodes){
        let liText = li.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        liText = liText.replace('+', '');
        if(liText === project.getTitle()){
            li.addEventListener('click', bringUpProjectContents);
        }
    }
    
    function bringUpProjectContents(e){
        projectPage(project);
    }

}



export default projectClick;