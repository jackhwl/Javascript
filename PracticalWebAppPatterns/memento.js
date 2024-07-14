class HistoryManager {
    history = []
    push(state) {
        this.history.push(createMemento())
    }

    pop() {
        if (this.history.length === 0) return null
        return this.history.pop()
    }
}