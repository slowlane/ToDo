function constructAddToDoForm(content){
    createForm();

    function createForm(){
        //Create Elements
        const modal = document.createElement('div');
        modal.classList.add('bg-modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeIcon = document.createElement('div');
        closeIcon.innerHTML = '+';
        closeIcon.classList.add('close');
        
        const legend = document.createElement('legend');
        legend.innerHTML = 'Create Task';

        const form = document.createElement('form');
        form.id = 'form';
        form.name = 'form';
        form.action = 'POST';

        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.placeholder = 'Title of task';
        titleInput.name = 'title';

        const descInput = document.createElement('textarea');
        descInput.rows = 4;
        descInput.cols = 40;
        descInput.placeholder = 'Description of task..';
        descInput.name = 'description';

        const dateDiv = document.createElement('div');
        const dateLabel = document.createElement('label');
        dateLabel.innerHTML = 'Select a date';
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.name = 'date';

        const prioDiv = document.createElement('div');
        const prioLabel = document.createElement('label');
        prioLabel.innerHTML = 'Choose priority';
        const prioInput = document.createElement('input');
        prioInput.type = 'number';
        prioInput.name = 'priority';

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.innerHTML = 'Create task';





        submitButton.addEventListener('click', getData);




        //Add to various DOM elements
        document.body.appendChild(modal);
        modal.appendChild(modalContent);
        modalContent.appendChild(closeIcon);
        modalContent.appendChild(form);
        form.appendChild(legend);
        form.appendChild(titleInput);
        form.appendChild(descInput);
        form.appendChild(dateDiv);
        form.appendChild(prioDiv);
        form.appendChild(submitButton);

        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(dateInput);

        prioDiv.appendChild(prioLabel);
        prioDiv.appendChild(prioInput);

        
    }

    function getData(e){
        e.preventDefault();
        const form = document.getElementById('form');
        const formData = new FormData(form);

        for(let pair of formData.values()){
            console.log(pair);
        }


    }
}

export default constructAddToDoForm;