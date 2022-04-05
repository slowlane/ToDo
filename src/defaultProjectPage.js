export function defaultProjectPage(){
    
    const todoDiv = document.querySelector('#todo-container');
    const newH1 = document.createElement('h1');
    newH1.innerHTML = 'Your project will display here!';
    newH1.id = 'default-header';
    
    todoDiv.appendChild(newH1);


}