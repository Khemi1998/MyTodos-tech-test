const input = document.querySelector(".toDo__input");
const add = document.querySelector(".toDo__add");
const tasks = document.querySelector(".toDo_listings");
const listStatus = document.querySelector(".toDo__status");
const reset = document.querySelector("#reset");
const deletingStatus = document.querySelector(".toDo__deletion");

//adding tasks
add.addEventListener("click", ()=>{
//needs to have text to be a task

if (input.value.length>0) {
    listStatus.innerHTML = `Tasks to complete: ${tasks.childNodes.length+1}`;

    const task = document.createElement("div");
    tasks.appendChild(task);    
    task.innerHTML=
    `<button class="edit"><i class="fas fa-pencil-alt"></i></button>
    <h3>${input.value}</h3>`;
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