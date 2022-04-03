class ToDo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    get(){
        return this.title + this.description;
    }
    getTitle(){
        return this.title;
    }
    getDate(){
        return this.dueDate;
    }
    getDesc(){
        return this.description;
    }
    getPrio(){
        return this.priority;
    }
    
}

export default ToDo;