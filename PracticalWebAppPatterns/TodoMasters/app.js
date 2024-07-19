import { TodoList } from "./webapp/classes.js"
import { Command, Commands, CommandExecutor } from "./webapp/command.js"
import { LocalStorage } from "./webapp/storage.js";

globalThis.DOM = {}
const DOM = globalThis.DOM

function renderList() {
    DOM.todoList.innerHTML = "";
    const list = TodoList.getInstance();
    for (let todo of list.items) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.innerHTML = `
            ${todo.text} <button class='delete-btn'>Delete</button>
        `;
        li.dataset.text = todo.text;
        DOM.todoList.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    DOM.todoList = document.getElementById("todo-list")
    DOM.addBtn = document.getElementById("add-btn")
    DOM.todoInput = document.getElementById("todo-input")

    DOM.addBtn.addEventListener('click', event => {
        const cmd = new Command(Commands.ADD)
        CommandExecutor.execute(cmd)
    })

    DOM.todoList.addEventListener('click', event => {
        if (event.target.classList.contains("delete-btn")) {
            const todo = event.target.parentNode.dataset.text
            const cmd = new Command(Commands.DELETE, [todo])
            CommandExecutor.execute(cmd)
        }   
    })
});

document.addEventListener('DOMContentLoaded', () => {
    TodoList.getInstance().addObserver(renderList)
})

document.addEventListener('DOMContentLoaded', () => {
    LocalStorage.load()
})