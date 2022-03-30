 class ProjectTracker  {
    #projects = [];
    constructor(){}
    get(){
        return this.#projects;
    }
    set(project){
        this.#projects.push(project);
    }
}

export default ProjectTracker;