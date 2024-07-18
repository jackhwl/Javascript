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
}