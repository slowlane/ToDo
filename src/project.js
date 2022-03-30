class Project {
    #toDoList = [];
    #title;
    #completionDate;
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
}

export default Project;