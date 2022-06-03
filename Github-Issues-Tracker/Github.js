window.addEventListener('load',()=>{
    const form = document.querySelector("#new-issue-form");
    const input = document.querySelector("#new-issue-input");
    const list_el = document.querySelector("#issues");
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const issue = input.value;
        console.log(issue);
        if(!issue){
            alert("fill out the issue idiot");
            return;
        }
        const issue_el = document.createElement('div');
        issue_el.classList.add("issue");
        const issue_content_el = document.createElement('div');
        issue_content_el.classList.add('content');
        issue_el.appendChild(issue_content_el);
        const issue_input_el=document.createElement('input');
        issue_input_el.classList.add('text');
        issue_input_el.type = 'text';
        issue_input_el.value = issue;
        issue_input_el.setAttribute('readonly','readonly');
        issue_content_el.appendChild(issue_input_el);
        const issue_actions_el = document.createElement('div');
        issue_actions_el.classList.add('actions');
        const issue_comment_el = document.createElement('button');
        issue_comment_el.classList.add('comment');
        issue_comment_el.innerText = 'comment';
        const issue_close_el = document.createElement('button');
        issue_close_el.classList.add('close');
        issue_close_el.innerText = 'close';
        issue_actions_el.appendChild(issue_comment_el);
        issue_actions_el.appendChild(issue_close_el);
        issue_el.appendChild(issue_actions_el);
        list_el.appendChild(issue_el);
        issue_comment_el.addEventListener('click',(e)=>{
            if(issue_comment_el.innerText.toLowerCase()=='comment'){
                issue_comment_el.innerText="SAVE";
                issue_input_el.removeAttribute("readonly");
                issue_input_el.focus();
            }
            else{
                issue_comment_el.innerText="Edit";
                issue_input_el.setAttribute('readonly','readonly');      
            }
        });
        issue_close_el.addEventListener('click',(e)=>{
            if(issue_close_el.innerText.toLowerCase()=='close'){
                issue_el.remove();
            }
        });
    });
});