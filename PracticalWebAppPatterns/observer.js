class Subjeect {
    obsersers = new Set();
    addObservers(obserser) { this.obsersers.add(obserser); }
    removeObservers(obserser) { this.obsersers.delete(obserser); }

    notifyObservers(message) { this.obsersers.forEach(o => obserser(message)); }
}

// Usage
subject1.addObservers((message) => console.log('Event fired'));