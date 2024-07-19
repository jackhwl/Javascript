import { TodoList, TodoItem } from "./classes.js";

export class Command {
    name;
    args;
    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
}

export const Commands = {
    ADD: "add",
    DELETE: "delete"
}

export const CommandExecutor = {
    execute(command) {
        const todoList = TodoList.getInstance();
        switch (command.name) {
            case Commands.ADD:
                const todoInput = globalThis.DOM.todoInput;
                const todoText = todoInput.value.trim();
                const itemInList = todoList.find(todoText);

                if (todoText != "" && itemInList == undefined) {
                    todoInput.value = "";
                    todoList.add(new TodoItem(todoText));
                }
                break;
            case Commands.DELETE:
                const [textToDelete] = command.args;
                todoList.delete(textToDelete);
                break;
            default:
                throw new Error(`Unknown command: ${command.name}`);
        }
    },
    add(todo) {
        console.log(`Adding todo: ${todo}`);
    },
    delete(todo) {
        console.log(`Deleting todo: ${todo}`);
    }
}