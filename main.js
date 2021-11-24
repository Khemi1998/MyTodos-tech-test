const input = document.querySelector(".toDo__input");
const add = document.querySelector(".toDo__add");
const tasks = document.querySelector(".toDo_listings");
const listStatus = document.querySelector(".toDo__status");
const reset = document.querySelector("#reset");

//adding tasks
add.addEventListener("click", ()=>{


//needs to have text to be a task
const inputText = input.value;

if (inputText.length>0) {
    listStatus.innerHTML = `Tasks to complete: ${tasks.childNodes.length+1}`;
    const task = document.createElement("div");
    tasks.appendChild(task);    
    task.innerHTML=`${inputText}`;

    //check box
    const check =document.createElement("input");
    check.setAttribute("type", "checkbox");
    task.appendChild(check);
    }
})

//reset
reset.addEventListener("click", ()=> {
    listStatus.innerHTML = `All tasks have been completed`;

    tasks.innerHTML = "";
})

