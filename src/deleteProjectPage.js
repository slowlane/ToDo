function deleteProjectPage() {
  const content = document.querySelector("#todo-container");
  const projectListItems = document.getElementsByClassName("project-li");
  for (let listItem of projectListItems) {
    listItem.classList.remove("active-li");
  }
  content.innerHTML = "";
}

export default deleteProjectPage;
