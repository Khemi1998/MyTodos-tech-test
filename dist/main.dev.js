"use strict";

var input = document.querySelector(".toDo__input");
var add = document.querySelector(".toDo__add");
var tasks = document.querySelector(".toDo_listings");
var listStatus = document.querySelector(".toDo__status");
var reset = document.querySelector("#reset"); //adding tasks

add.addEventListener("click", function () {
  //needs to have text to be a task
  var inputText = input.value;

  if (inputText.length > 0) {
    listStatus.innerHTML = "Tasks to complete: ".concat(tasks.childNodes.length + 1);
    var task = document.createElement("div");
    tasks.appendChild(task);
    task.innerHTML = "".concat(inputText); //check box

    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    task.appendChild(check);
  }
}); //reset

reset.addEventListener("click", function () {
  listStatus.innerHTML = "All tasks have been completed";
  tasks.innerHTML = "";
});