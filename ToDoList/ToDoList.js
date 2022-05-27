window.addEventListener('load',()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    form.addEventListener('submit',(e)=>{;
        e.preventDefault();
        const task = input.value;
        console.log(task);
        if(!task){
            alert("fill out the task idiot");
            return;
        }
        const task_el = document.createElement('div');
        task_el.classList.add("task");
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_content_el.innerText = task;
        task_el.appendChild(task_content_el);
        list_el.appendChild(task_el);
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'edit';
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'delete';
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);
    })
});