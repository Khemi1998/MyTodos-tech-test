const input = document.querySelector(".toDo__input");
const add = document.querySelector(".toDo__add");
const tasks = document.querySelector(".toDo_listings");

add.addEventListener("click", ()=>{
    const task = document.createElement("div");
    tasks.appendChild(task);

    const inputText = input.value;
    if (inputText.length>0) {
        task.innerHTML=`${inputText}`;
    }
})