import { observerMixin } from "./mixin.js";

class TodoItem {
    constructor(test) {
        this.text = text;
    }
    equals(other) {     // Value Object pattern
        return othis.text == other.text;
    }
}

class TodoList {
    // Data
    #data = new Set();
    get items() { return this.#data; }

    // Singleton pattern
    constroctor() {
        if (TodoList.instance) {
            throw new Error("Use TodoList.getInstance() to access the list")
        }
        TodoList.instance = this;
    }

    static instance = null;
    static {
        this.instance = new TodoList();
    }
    static getInstance() {
        return this.instance;
    }

    // List behavior
    add(item) {
        const array = Array.from(this.#data)
        const todoExists = this.#data.filter(t => t.equals(item)).length > 0;
        if (!todoExists) {
            this.#data.add(item);
            this.notify();
        }
    }
    delete(todo_text){
        const array = Array.from(this.#data)
        const todoToDelete = this.#data.filter(t => t.text == todo_text)[0];
        this.#data.delete(todoToDelete);
        this.notify();
    }
    find(todo_text) {
        const array = Array.from(this.#data)
        return this.#data.filter(t => t.text == todo_text);
    }
    replaceList(list) {
        this.#data = list;
        this.notify();
    }
}

// Applying the observer mixin to the class
Object.assign(TodoList.prototype, observerMixin);