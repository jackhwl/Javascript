// MIXIN that will implement Observable pattern
export const observerMixin = {
    observers: new Set(),
    addObserver(obs) { this.observers.add(obs); },
    removeObserver(obs) { this.observers.delete(obs); },
    notify() { this.observers.forEach(o => o()); }
}

// observerMixin.addObserver(() => console.log('Event fired'));