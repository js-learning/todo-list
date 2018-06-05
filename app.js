"use strict";

const todolistElm = document.querySelector("#todoList");
let todoList = new TotoList(todolistElm);

const addTodoItemForm = document.querySelector("#addTodoItemForm");
addTodoItemForm.addEventListener("submit", function(event){
  event.preventDefault();

  const form = event.target;
  const todoItemName = form.querySelector("#todoItemName");

  if (todoItemName.value) {
    const todoItem = new TodoItem(todoItemName.value);
    todoList.add(todoItem);
    form.reset();
  }
});