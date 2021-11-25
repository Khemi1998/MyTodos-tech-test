const input = document.querySelector(".MyTodos__lists--input");
const add = document.querySelector(".MyTodos__lists--add");
const tasks = document.querySelector(".MyTodos__lists__task");
const listStatus = document.querySelector(".MyTodos__lists__status");
const reset = document.querySelector(".MyTodos__reset");
const deletingStatus = document.querySelector(".MyTodos__deletion");

//adding tasks
add.addEventListener("click", ()=>{
//needs to have text to be a task

if (input.value.length>0) {
    listStatus.innerHTML = `Tasks to complete: ${tasks.childNodes.length+1}`;

    const task = document.createElement("div");
    tasks.appendChild(task);    
    task.innerHTML=
    `<button class="MyTodos__edit"><i class="fas fa-pencil-alt"></i></button>
    <h3 class="MyTodos__task__tobedone">${input.value}</h3>`;
    input.value = "";
    
    //add check box
    const check =document.createElement("input");
    check.setAttribute("type", "checkbox");
    task.appendChild(check);
    }
})

//reset
reset.addEventListener("click", ()=> {
    listStatus.innerHTML = `All tasks have been completed`;
    tasks.innerHTML = "";
    input.value = "";
})

const checked = document.querySelectorAll('input[type="checkbox"]:checked');
checked.forEach((button)=>{
    alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
    button.addEventListener("click",(event)=>{
        
    alert("hi")
        
    })
})

/*
    deletingStatus.style.display = "block";
    deletingStatus.innerHTML = ``
    */