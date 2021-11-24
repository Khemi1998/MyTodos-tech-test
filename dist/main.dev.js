"use strict";

var input = document.querySelector(".toDo__input");
var add = document.querySelector(".toDo__add");
var tasks = document.querySelector(".toDo_listings");
var listStatus = document.querySelector(".toDo__status");
add.addEventListener("click", function () {
  listStatus.innerHTML = "hi";
  var task = document.createElement("div");
  tasks.appendChild(task);
  var inputText = input.value;

  if (inputText.length > 0) {
    task.innerHTML = "".concat(inputText);
  }
});