class DataProcessor {
    process() {
        this.loadData();
        this.processData();
        this.saveData();
    }
}

class JSONDataProcessor extends DataProcessor {
    loadData() {
        console.log('Loading JSON data');
    }

    processData() {
        console.log('Processing JSON data');
    }

    saveData() {
        console.log('Saving JSON data');
    }
}