class Project {
    #toDoList = [];
    #title;
    #completionDate = 0;
    constructor(title){
        this.#title = title;
    }
    get(){
        return this.#toDoList;
    }

    set(item){
        this.#toDoList.push(item);
    }

    getTitle(){
        return this.#title;
    }

    setCompletionDate(completedBy){
        this.#completionDate = completedBy;
    }
    getCompletionDate(){
        return this.#completionDate;
    }
    addTask(task){
        this.#toDoList.push(task);
    }
    setToDoList(newToDoList){
        this.#toDoList = newToDoList;
    }
}

export default Project;