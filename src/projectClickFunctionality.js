import projectPage from "./projectPage";
import deleteProjectPage from "./deleteProjectPage";
function projectClick(project) {
  const content = document.querySelector(".left-side-div");
  const projectList = content.querySelector("ul");
  console.log("yo");

  for (let li of projectList.childNodes) {
    let liText = li.innerText.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
    liText = liText.replace("+", "");
    if (liText === project.getTitle()) {
      li.addEventListener("click", bringUpProjectContents);
    }
  }

  function bringUpProjectContents(e) {
    deleteProjectPage();
    e.target.classList.add("active-li");
    projectPage(project);
  }
}

export default projectClick;
