class Project {
    #toDoList = [];
    constructor(title){
        this.#title = title;
    }
    get(){
        return this.#toDoList;
    }

    set(item){
        this.#toDoList.push(item);
    }
}