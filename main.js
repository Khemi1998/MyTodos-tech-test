const input = document.querySelector(".MyTodos__lists--input");
const add = document.querySelector(".MyTodos__lists--add");
const tasks = document.querySelector(".MyTodos__lists__task");
const listStatus = document.querySelector(".MyTodos__lists__status");
const reset = document.querySelector(".MyTodos__reset");
const footer = document.querySelector(".MyTodos__deletion");
const deletingStatus = document.querySelector(".MyTodos__deletion--status");
const delete_button = document.querySelector(".MyTodos__deletion--delete");

//adding tasks
const handleclick = add.addEventListener("click", ()=>{
//needs to have text to be a task

if (input.value.length>0) {
    footer.style.display = "block";

    listStatus.innerHTML = `Tasks to complete: ${tasks.childNodes.length+1}`;

    const task = document.createElement("div");
    tasks.appendChild(task);    
    task.innerHTML=
    `<button class="MyTodos__edit"><i class="fas fa-pencil-alt"></i></button>
    <h3 contenteditable="false" class="MyTodos__task__tobedone">${input.value}</h3>`;
    input.value = "";
    
    //add check box
    const check =document.createElement("input");
    check.classList.add("MyTodos__checkbox");
    check.setAttribute("type", "checkbox");
    task.appendChild(check);

    //edit
    const edit = document.querySelectorAll(".MyTodos__edit");
    const edit_task = document.querySelectorAll(".MyTodos__task__tobedone");

    for (let i=0; i<(tasks.childNodes.length); i++){
        edit[i].addEventListener("click",()=>{
            if (edit_task[i].contentEditable === "false"){
                edit_task[i].contentEditable = "true"
                edit[i].classList.add("MyTodos__editting");
            }else{
                edit_task[i].contentEditable = "false";
                edit[i].classList.remove("MyTodos__editting");
            }
        })
    }
    
}
})

document.addEventListener("change", ()=>{
    //checked checkboxes
    const ischecked = document.querySelectorAll('.MyTodos__checkbox:checked')
    deletingStatus.innerHTML = (`${ischecked.length} Task(s) Selected`);
})


delete_button.addEventListener("click", ()=>{
    //checkboxes
    const checkbox = document.querySelectorAll(".MyTodos__checkbox");
    
    for (let i=0; i<checkbox.length; i++ ){
        if (checkbox[i].checked ===true){
        //deleting selected nodes
        toBeDeleted = tasks.childNodes[i];
    }
    }
    tasks.removeChild(toBeDeleted);
    listStatus.innerHTML = `Tasks to complete: ${tasks.childNodes.length}`

    })

//reset
reset.addEventListener("click", ()=> {
    listStatus.innerHTML = `All tasks have been completed`;
    footer.style.display = "none";
    tasks.innerHTML = "";
    input.value = "";
})