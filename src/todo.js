class ToDo {
    constructor(title, description, dueDate){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        // this.priority = priority;
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
    setDesc(desc){
        this.description = desc;
    }
    
}

export default ToDo;